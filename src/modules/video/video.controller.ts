import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  UseGuards,
  Body,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { AuthGuard } from "../auth/auth.guard";
import { ApiResult, initResult } from "src/shared/models/api.interface";
import { VideoService } from "./video.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Video } from "src/shared/models/video.interface";

@Controller("api/video")
export class VideoController {
  constructor(private videoService: VideoService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll(): Promise<ApiResult> {
    const result = await this.videoService.getAll();
    return result;
  }

  @UseGuards(AuthGuard)
  @Delete("remove/:id")
  async remove(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.videoService.remove(id);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post("insert")
  async insertVideo(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      const inserted = await this.videoService.insert(signInDto.record);
      answer = await this.videoService.getById(
        inserted.result["lastInsertRowid"],
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Put("update")
  async updateVideo(
    @Body() signInDto: Record<string, any>,
  ): Promise<ApiResult> {
    let answer = { ...initResult };
    try {
      answer = await this.videoService.update(signInDto.record);
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @UseGuards(AuthGuard)
  @Post("upload")
  @UseInterceptors(
    FileInterceptor("video", {
      storage: diskStorage({ destination: "./client/video" }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const video = await this.videoService.getAll();
    if (video.result.length !== 0) {
      const checkAudio: Video[] = video.result.filter(
        (item: Video) => item.name === file.originalname,
      );

      if (checkAudio.length !== 0) {
        this.videoService.removeFile(file.path);
        throw new HttpException(
          "Видео файл уже существует!",
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
    const newVideo: Video = {
      name: file.originalname,
      content: `файл:${path}`,
      category: "без категории",
      video_type: "файл",
    };

    await this.videoService.insert(newVideo);
    return `Видео файл ${newVideo.name} добавлен!`;
  }

  @Get(":id")
  async getById(@Param("id") id: number): Promise<ApiResult> {
    const result = await this.videoService.getById(id);
    return result;
  }
}
