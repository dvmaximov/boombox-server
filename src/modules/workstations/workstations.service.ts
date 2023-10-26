import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { initResult, ApiResult } from "src/shared/models/api.interface";
import { StationType } from "src/shared/models/socket.interface";
import {
  Workstation,
  Workstations,
} from "src/shared/models/workstation.interface";
import { SocketService } from "../api/socket.service";
import { ProgramsService } from "../programs/programs.service";

@Injectable()
export class WorkstationsService {
  private workstations: Workstations = [];

  constructor(
    @Inject(forwardRef(() => SocketService))
    private readonly socketService: SocketService,
    private readonly programsService: ProgramsService,
  ) {}

  getWorkstations(): ApiResult {
    return { ...initResult, result: this.workstations };
  }

  getProgramsByStationName(name: string) {
    this.socketService.emit(name, "getPrograms");
  }

  async sendProgram(name: string, id: number) {
    const program = await this.programsService.getById(id);
    this.socketService.emit(name, "setProgram", program);
  }

  async deleteProgram(name: string, id: number) {
    this.socketService.emit(name, "deleteProgram", id);
  }

  async updateProgram(name: string, id: number) {
    const program = await this.programsService.getById(id);
    this.socketService.emit(name, "updateProgram", program);
  }

  async restartProgram(name: string) {
    this.socketService.emit(name, "restartProgram");
  }

  async updateSpinner(name: string, id: number) {
    this.socketService.emit(name, "updateSpinner", id);
  }

  async updateItemsAfterCheck() {
    for (const station of this.workstations) {
      this.socketService.emit(station.name, "updateItemsAfterCheck");
    }
  }

  createWorkstation(
    name: string,
    socketId: string,
    stationType: StationType,
  ): Workstation {
    const newWorkstation: Workstation = {
      name,
      stationType,
      socketId,
    };
    this.workstations.push(newWorkstation);
    return newWorkstation;
  }

  removeWorkstation(socketId: string): Workstation | null {
    const newWorkstations = this.workstations.filter(
      (station) => station.socketId !== socketId,
    );
    const removeWorkstation = this.workstations.find(
      (station) => station.socketId === socketId,
    );
    this.workstations = newWorkstations;
    return removeWorkstation;
  }
}
