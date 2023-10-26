import { Controller, Get, Put, Body, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { SettingsService } from "./settings.service";

@Controller("api/settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    return await this.settingsService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get("/ip")
  async getIpAddresses(): Promise<ApiResult> {
    return await this.settingsService.getIpAddresses();
  }

  @UseGuards(AuthGuard)
  @Put("/update")
  async update(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      await this.settingsService.update(signInDto.record);
      answer = await this.settingsService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
