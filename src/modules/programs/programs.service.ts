import { Injectable } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { Program } from "src/shared/models/programs.interface";

@Injectable()
export class ProgramsService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("programs", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("programs", id);
  }

  async insert(record: Program): Promise<ApiResult> {
    return await this.api.insert("programs", record);
  }

  async update(record: Program): Promise<ApiResult> {
    return await this.api.update("programs", record);
  }

  async remove(id: number): Promise<ApiResult> {
    const result = await this.api.remove("programs", id);
    if (result.error) {
      result.error = "Ошибка удаления записи на сервере.";
    }
    return result;
  }
}
