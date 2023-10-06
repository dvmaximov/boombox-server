import { Controller, Get, UseGuards } from "@nestjs/common";
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
}
