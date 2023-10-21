import { Controller, Get, UseGuards, Param } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { ApiResult } from "src/shared/models/api.interface";
import { WorkstationsService } from "./workstations.service";

@Controller("api/workstations")
export class WorkstationsController {
  constructor(private readonly workstationsService: WorkstationsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    return this.workstationsService.getWorkstations();
  }

  @UseGuards(AuthGuard)
  @Get(":name")
  getProgramsByStationName(@Param("name") name: string) {
    this.workstationsService.getProgramsByStationName(name);
  }

  @UseGuards(AuthGuard)
  @Get(":name/:id")
  sendProgram(@Param("name") name: string, @Param("id") id: number) {
    this.workstationsService.sendProgram(name, id);
  }
}
