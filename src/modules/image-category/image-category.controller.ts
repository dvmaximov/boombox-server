import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseGuards,
  Body,
} from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { ImageCategory } from "src/shared/models/images.interface";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { ImageCategoryService } from "./image-category.service";

@Controller("api/imagecategory")
export class ImageCategoryController {
  constructor(private imageCategoryService: ImageCategoryService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.imageCategoryService.getAll();
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.imageCategoryService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insert(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
    let answer = { ...initResult };
    const image = await this.imageCategoryService.getAll(["id", "name"]);
    if (image.result.length !== 0) {
      const checkImage: ImageCategory[] = image.result.filter(
        (item: ImageCategory) => item.name === signInDto.record.name,
      );

      if (checkImage.length !== 0) {
        answer.error = "Категория с таким именем уже существует!";
        return answer;
      }
    }
    try {
      const inserted = await this.imageCategoryService.insert(signInDto.record);
      answer = await this.imageCategoryService.getById(
        inserted.result["lastInsertRowid"],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
