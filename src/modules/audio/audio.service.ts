import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { ApiResult } from "src/shared/models/api.interface";

@Injectable()
export class AudioService {
  constructor(private readonly api: ApiService) {}

  async getAll(): Promise<ApiResult> {
    return await this.api.getAll("audio");
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("audio", id);
  }

  async insert(record: unknown): Promise<ApiResult> {
    return await this.api.insert("audio", record);
  }

  async remove(id: number): Promise<ApiResult> {
    const record = await this.getById(id);
    await this.removeFile(`./client/audio/${record.result.path}`);
    return await this.api.remove("audio", id);
  }

  async removeFile(path: string): Promise<void> {
    return await this.api.removeFile(path);
  }
}
