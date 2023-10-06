import { Injectable } from "@nestjs/common";
import Jimp from "jimp";
import { ApiResult } from "src/shared/models/api.interface";
import { ApiService } from "../api/api.service";
import { Image } from "src/shared/models/images.interface";
import * as modifyExif from "modify-exif";

@Injectable()
export class ImagesService {
  constructor(private readonly api: ApiService) {}

  async getAll(fields: string[] = []): Promise<ApiResult> {
    return await this.api.getAll("images", fields);
  }

  async getById(id: number): Promise<ApiResult> {
    return await this.api.getById("images", id);
  }

  async insert(record: Image, ext: string): Promise<ApiResult> {
    record.content = await this.prepareImage(record.content, ext);
    return await this.api.insert("images", record);
  }

  async remove(id: number): Promise<ApiResult> {
    return await this.api.remove("images", id);
  }

  async prepareImage(image: string, ext: string) {
    const IMAGE_WIDTH = 512;
    let imageOrientation = 0;
    let rotateDeg = 0;

    let mime = "image/jpeg";
    switch (ext) {
      case "jpg":
      case "jpeg":
        mime = "image/jpeg";
        break;
      case "png":
        mime = "image/png";
        break;
    }
    const imgBase64 = image.replace(/^data:image\/\w+;base64,/, "");
    let img = await Jimp.read(Buffer.from(imgBase64, "base64"));

    const ratio = img.getWidth() / img.getHeight();
    img = img.resize(IMAGE_WIDTH, IMAGE_WIDTH / ratio).quality(50);

    let output;

    img.getBuffer(mime, (err, buffer) => {
      output = buffer;
    });

    try {
      modifyExif(output, (data) => {
        imageOrientation =
          data && data["0th"] && data["0th"]["274"] ? data["0th"]["274"] : 0;
        if (imageOrientation) {
          if (imageOrientation === 1) {
            imageOrientation = 0;
          } else {
            // data["0th"]["274"] = 1; // reset EXIF orientation value
          }
        }
        if (imageOrientation) {
          switch (imageOrientation) {
            case 3:
              rotateDeg = 180;
              break;
            case 6:
              rotateDeg = -270;
              break;
            case 8:
              rotateDeg = -90;
              break;
            default:
              rotateDeg = 0;
              break;
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
    img.rotate(rotateDeg);

    img.getBuffer(mime, (err, buffer) => {
      output = buffer;
    });
    return "data:image/jpeg;base64," + output.toString("base64");
  }
}
