import { Injectable } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { Spinner } from "src/shared/models/spinners.interface";

@Injectable()
export class SpinnersService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("spinners", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("spinners", id);
  }

  async insert(record: Spinner): Promise<ApiResult> {
    return await this.api.insert("spinners", record);
  }

  async update(record: Spinner): Promise<ApiResult> {
    return await this.api.update("spinners", record);
  }

  async remove(id: number): Promise<ApiResult> {
    return await this.api.remove("spinners", id);
  }
}
