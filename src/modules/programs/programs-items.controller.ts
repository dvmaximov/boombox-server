import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  UseGuards,
  Body,
} from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
// import { ProgramItem } from "src/shared/models/programs.interface";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { ProgramsItemsService } from "./programs-items.service";

@Controller("api/programs/items")
export class ProgramsItemsController {
  constructor(private programsItemsService: ProgramsItemsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.programsItemsService.getAll([
      "id",
      "program_id",
      "image_id",
      "startDate",
      "endDate",
      "active",
      "always",
      // "imageContent",
    ]);
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.programsItemsService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insertProgramItem(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      const inserted = await this.programsItemsService.insert(signInDto.record);
      answer = await this.programsItemsService.getById(
        inserted.result["lastInsertRowid"],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Put("update")
  async updateProgram(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      answer = await this.programsItemsService.update(signInDto.record);
      // answer = await this.programsItemsService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
