import { Server, Socket } from "socket.io";
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  // MessageBody,
  // OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import {
  ClientToServerEvents,
  ServerToClientEvents,
  StationType,
} from "../../shared/models/socket.interface";

import { Message } from "../../shared/models/socket.interface";
import { WorkstationsService } from "../workstations/workstations.service";
import { Workstation } from "src/shared/models/workstation.interface";
import { Inject, forwardRef } from "@nestjs/common";
import { ProgramsService } from "../programs/programs.service";
import { ProgramsItemsService } from "../programs/programs-items.service";
import { SpinnersService } from "../spinners/spinners.service";
import { AudioService } from "../audio/audio.service";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class SocketService implements OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server = new Server<
    ServerToClientEvents,
    ClientToServerEvents
  >();
  private uiStation: Workstation | null = null;

  constructor(
    @Inject(forwardRef(() => WorkstationsService))
    private readonly workstationService: WorkstationsService,
    private readonly programsService: ProgramsService,
    private readonly programsItemsService: ProgramsItemsService,
    private readonly spinnersService: SpinnersService,
    private readonly audioService: AudioService,
  ) {}

  @SubscribeMessage("registration")
  async registration(client: Socket, data: Message): Promise<Message> {
    client.join(data.station.stationName);
    const answer = {
      worstation: this.workstationService.createWorkstation(
        data.station.stationName,
        client.id,
        data.station.stationType,
      ),
    };
    if (data.station.stationType === StationType.UI) {
      this.uiStation = answer.worstation;
    }
    this.server.sockets
      .to(data.station.stationName)
      .emit("registration", answer);
    if (this.uiStation) {
      this.emit(this.uiStation.name, "updateWorkstations");
    }

    return data;
  }

  @SubscribeMessage("getPrograms")
  async getPrograms(client: Socket, data: Message): Promise<Message> {
    if (this.uiStation) {
      this.emit(this.uiStation.name, "getPrograms", data);
    }

    return data;
  }

  @SubscribeMessage("getProgramItems")
  async getProgramItems(client: Socket, data: Message): Promise<Message> {
    const id = data.message["id"] as number;
    let program = await this.programsService.getById(id);
    if (program.error || !program.result) {
      this.emit(data.station.stationName, "getProgramItems", {
        items: null,
        spinner: null,
        audio: null,
        program: null,
      });
      return;
    }
    let items = await this.programsItemsService.getAll();
    items = items.result.filter(
      (item) => item.program_id === id && item.active == "true",
    );
    let spinner = await this.spinnersService.getById(program.result.spinner_id);
    spinner = spinner.result;
    let audio = await this.audioService.getById(program.result.audio_id);
    audio = audio.result;
    program = program.result;
    this.emit(data.station.stationName, "getProgramItems", {
      items,
      spinner,
      audio,
      program,
    });
    return data;
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    const removed = this.workstationService.removeWorkstation(socket.id);
    if (removed && removed.stationType === StationType.UI) {
      this.uiStation = null;
    }
    if (this.uiStation) {
      this.emit(this.uiStation.name, "updateWorkstations");
    }
  }

  async emit(to: string, event: string, payload = {}): Promise<void> {
    this.server.sockets.to(to).emit(event, payload);
  }
}
