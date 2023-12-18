import { Injectable } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { Video } from "src/shared/models/video.interface";

@Injectable()
export class VideoService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("video", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("video", id);
  }

  async insert(record: Video): Promise<ApiResult> {
    return await this.api.insert("video", record);
  }

  async remove(id: number): Promise<ApiResult> {
    const record = await this.getById(id);
    const nameList = record.result.content.split(":");
    const name = nameList[1];
    await this.removeFile(`./client/video/${name}`);
    return await this.api.remove("video", id);
  }

  async update(record: Video): Promise<ApiResult> {
    return await this.api.update("video", record);
  }

  async removeFile(path: string): Promise<void> {
    return await this.api.removeFile(path);
  }
}
