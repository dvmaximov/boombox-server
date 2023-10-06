import { Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { ApiResult, initResult } from "../../shared/models/api.interface";
import { networkInterfaces } from "os";

@Injectable()
export class SettingsService {
  constructor(private api: ApiService) {}

  async getAll(): Promise<ApiResult> {
    return await this.api.getAll("settings");
  }

  async getIpAddresses(): Promise<ApiResult> {
    const answer = { ...initResult };
    try {
      answer.result = Object.values(networkInterfaces()).reduce(
        (r, list) =>
          r.concat(
            list.reduce(
              (rr, i) =>
                rr.concat(
                  (i.family === "IPv4" && !i.internal && i.address) || [],
                ),
              [],
            ),
          ),
        [],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  async getSettingById(id: number): Promise<ApiResult> {
    return await this.api.getById("settings", id);
  }

  async update(id: number): Promise<ApiResult> {
    return await this.api.getById("settings", id);
  }
}
