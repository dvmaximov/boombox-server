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
  @Get("restart/:name")
  restartProgram(@Param("name") name: string) {
    this.workstationsService.restartProgram(name);
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

  @UseGuards(AuthGuard)
  @Get("delete/:name/:id")
  deleteProgram(@Param("name") name: string, @Param("id") id: number) {
    this.workstationsService.deleteProgram(name, id);
  }

  @UseGuards(AuthGuard)
  @Get("update/:name/:id")
  updateProgram(@Param("name") name: string, @Param("id") id: number) {
    this.workstationsService.updateProgram(name, id);
  }

  @UseGuards(AuthGuard)
  @Get("updateSpinner/:name/:id")
  updateSpinner(@Param("name") name: string, @Param("id") id: number) {
    this.workstationsService.updateSpinner(name, id);
  }
}
