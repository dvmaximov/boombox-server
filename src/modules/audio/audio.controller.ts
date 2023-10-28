import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Express } from "express";
import { AuthGuard } from "../auth/auth.guard";
import { diskStorage } from "multer";
import { Audio } from "src/shared/models/audio.interface";
import { ApiResult } from "src/shared/models/api.interface";
import { AudioService } from "./audio.service";

@Controller("api/audio")
export class AudioController {
  constructor(private audioService: AudioService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.audioService.getAll();
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.audioService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("upload")
  @UseInterceptors(
    FileInterceptor("audio", {
      storage: diskStorage({ destination: "./client/audio" }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const audio = await this.audioService.getAll();
    if (audio.result.length !== 0) {
      const checkAudio: Audio[] = audio.result.filter(
        (item: Audio) => item.name === file.originalname,
      );

      if (checkAudio.length !== 0) {
        this.audioService.removeFile(file.path);
        throw new HttpException(
          "Аудио файл уже существует!",
          HttpStatus.CONFLICT,
        );
      }
    }
    let path = "";
    if (file.path) {
      const parts = file.path.split("\\");
      path = parts[parts.length - 1];
    }
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8",
    );

    const newAudio: Audio = {
      name: file.originalname,
      path,
    };

    await this.audioService.insert(newAudio);
    return `Аудио файл ${newAudio.name} добавлен!`;
  }
}
