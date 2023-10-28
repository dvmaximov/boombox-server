import { Injectable } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { ImageCategory } from "src/shared/models/images.interface";

@Injectable()
export class ImageCategoryService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("imageCategories", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("imageCategories", id);
  }

  async insert(record: ImageCategory): Promise<ApiResult> {
    return await this.api.insert("imageCategories", record);
  }

  async remove(id: number): Promise<ApiResult> {
    return await this.api.remove("imageCategories", id);
  }

  async update(record: ImageCategory): Promise<ApiResult> {
    return await this.api.update("imageCategories", record);
  }
}
