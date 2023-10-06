import { Controller, Get, Body, UseGuards } from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { ApiResult } from "src/shared/models/api.interface";
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
  @Get("/update")
  async update(@Body() signInDto: Record<string, any>): Promise<void> {
    console.log(signInDto);
    // return await this.settingsService.update();
  }
}
