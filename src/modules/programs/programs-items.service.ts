import { Injectable } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { ProgramItem } from "src/shared/models/programs.interface";

@Injectable()
export class ProgramsItemsService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("programItems", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("programItems", id);
  }

  async insert(record: ProgramItem): Promise<ApiResult> {
    return await this.api.insert("programItems", record);
  }

  async update(record: ProgramItem): Promise<ApiResult> {
    return await this.api.update("programItems", record);
  }

  async remove(id: number): Promise<ApiResult> {
    const result = await this.api.remove("programItems", id);
    if (result.error) {
      result.error = "Ошибка удаления записи на сервере.";
    }
    return result;
  }
}
