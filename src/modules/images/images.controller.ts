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
// import { Image } from "src/shared/models/images.interface";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { ImagesService } from "./images.service";

@Controller("api/images")
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.imagesService.getAll(["id", "name", "category"]);
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.imagesService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insertImage(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    // const image = await this.imagesService.getAll(["id", "name"]);
    // if (image.result.length !== 0) {
    //   const checkImage: Image[] = image.result.filter(
    //     (item: Image) => item.name === signInDto.record.name,
    //   );

    //   if (checkImage.length !== 0) {
    //     answer.error = "Изображение с таким именем уже существует!";
    //     return answer;
    //   }
    // }
    try {
      const ext: string = signInDto.fileName.split(".").pop().toLowerCase();
      const inserted = await this.imagesService.insert(signInDto.record, ext);
      answer = await this.imagesService.getById(
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
      answer = await this.imagesService.update(signInDto.record);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @Get(":id")
  async getById(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.imagesService.getById(id);
    return result;
  }
}
