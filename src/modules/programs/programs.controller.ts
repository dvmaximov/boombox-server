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
import { Program } from "src/shared/models/programs.interface";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { ProgramsService } from "./programs.service";

@Controller("api/programs")
export class ProgramsController {
  constructor(private programsService: ProgramsService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.programsService.getAll();
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.programsService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insertProgram(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    const program = await this.programsService.getAll(["id", "name"]);
    if (program.result.length !== 0) {
      const checkProgram: Program[] = program.result.filter(
        (item: Program) => item.name === signInDto.record.name,
      );

      if (checkProgram.length !== 0) {
        answer.error = "Программа с таким именем уже существует!";
        return answer;
      }
    }
    try {
      const inserted = await this.programsService.insert(signInDto.record);
      answer = await this.programsService.getById(
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
      await this.programsService.update(signInDto.record);
      answer = await this.programsService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
