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
import { Spinner } from "src/shared/models/spinners.interface";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { SpinnersService } from "./spinners.service";

@Controller("api/spinners")
export class SpinnersController {
  constructor(private spinnersService: SpinnersService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.spinnersService.getAll();
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.spinnersService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insertSpinner(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    const spinner = await this.spinnersService.getAll(["id", "name"]);
    if (spinner.result.length !== 0) {
      const checkSpinner: Spinner[] = spinner.result.filter(
        (item: Spinner) => item.name === signInDto.record.name,
      );

      if (checkSpinner.length !== 0) {
        answer.error = "Спиннер с таким именем уже существует!";
        return answer;
      }
    }
    try {
      const inserted = await this.spinnersService.insert(signInDto.record);
      answer = await this.spinnersService.getById(
        inserted.result["lastInsertRowid"],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Put("update")
  async updateSpinner(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      await this.spinnersService.update(signInDto.record);
      answer = await this.spinnersService.getById(signInDto.record.id);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
