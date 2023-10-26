import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { ProgramItem } from "src/shared/models/programs.interface";
import { isTimeBetween, isTomorrowBetween } from "src/services/utils.service";
import { WorkstationsService } from "../workstations/workstations.service";

@Injectable()
export class ProgramsItemsService {
  private timer: ReturnType<typeof setInterval> = null;
  private isItemsChecked = false;

  constructor(
    @Inject(forwardRef(() => WorkstationsService))
    private readonly workstationService: WorkstationsService,
    private readonly api: ApiService,
  ) {
    this.timer = setInterval(
      () => {
        this.checkActiveItems();
      },
      5 * 60 * 1000,
    );
  }

  onModuleDestroy() {
    clearInterval(this.timer);
  }

  async checkActiveItems() {
    const answer = await this.api.getAll("programItems");
    if (!answer.result) return;
    const items = answer.result as ProgramItem[];
    if (items.length === 0) return;

    let testTime = isTimeBetween("23:30", "23:50");
    if (testTime && !this.isItemsChecked) {
      for (const item of items) {
        if (
          !isTomorrowBetween(item.startDate, item.endDate) &&
          item.active == "true"
        ) {
          item.active = "false";
          await this.api.update("programItems", item);
        }
      }
      this.isItemsChecked = true;
      await this.workstationService.updateItemsAfterCheck();
    }
    testTime = isTimeBetween("00:05", "00:30");
    if (testTime && this.isItemsChecked) {
      this.isItemsChecked = false;
    }
  }

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
