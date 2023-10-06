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

  constructor(private readonly workstationService: WorkstationsService) {}

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
