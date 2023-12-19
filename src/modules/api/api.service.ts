import { Injectable } from "@nestjs/common";
import { unlink } from "node:fs/promises";
import * as Database from "better-sqlite3";
// import { v4 as uuidv4 } from "uuid";

import { ApiResult, initResult } from "../../shared/models/api.interface";
import { Settings } from "src/shared/models/settings.interface";

@Injectable()
export class ApiService {
  private db: Database.Database | null = null;

  constructor() {
    this.prepare();
  }

  async removeFile(filePath: string) {
    try {
      await unlink(filePath);

      console.log(`Deleted the file under ${filePath}`);
    } catch (err) {
      console.log("An error occured: ", err.message);
    }
  }

  async prepare(): Promise<void> {
    const filename = "bb-server.s3db";
    this.db = Database(filename, {});
    try {
      const settings: Settings = this.db
        .prepare("SELECT * FROM settings")
        .all() as Settings;
      if (settings.length === 0) {
        this.fillDataV1();
      }
      // this.db
      //   .prepare(
      //     `
      //   UPDATE programs
      //   SET program_type = 'изображение'
      //     `,
      //   )
      //   .run();
    } catch (e) {
      await this.createV1();
      await this.fillDataV1();
    }
  }

  async createV1(): Promise<void> {
    this.db
      .prepare(
        `
        CREATE TABLE [settings] (
          [id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          [name] TEXT  NOT NULL,
          [label] TEXT  NOT NULL,
          [value] TEXT  NULL,
          [editable] BOOLEAN DEFAULT 'true' NOT NULL
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [users] (
          [id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          [username] TEXT  NOT NULL,
          [name] TEXT UNIQUE NOT NULL,
          [password] TEXT  NOT NULL,
          [role] TEXT  NOT NULL
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [imageCategories] (
          [id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          [name] VARCHAR(100)  UNIQUE NOT NULL,
          [isDefault] BOOLEAN DEFAULT 'false' NOT NULL          
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [images] (
          [id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
          [name] VARCHAR(100)  NOT NULL,
          [content] TEXT  NOT NULL,
          [descriptor] TEXT DEFAULT '' NOT NULL,
          [category] VARCHAR(100) DEFAULT 'без категории' NOT NULL
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [audio] (
          [id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          [name] VARCHAR(100) UNIQUE NOT NULL,
          [path] VARCHAR(100)  UNIQUE NOT NULL
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [video] (
          [id] INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT,
          [name] VARCHAR(100)  NOT NULL,
          [content] TEXT  NOT NULL,
          [video_type] VARCHAR(100) DEFAULT 'файл' NOT NULL,
          [category] VARCHAR(100) DEFAULT 'без категории' NOT NULL
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [programs] (
          [id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
          [name] VARCHAR(100)  UNIQUE NOT NULL,
          [startTime] VARCHAR(10)  NOT NULL,
          [endTime] VARCHAR(10)  NOT NULL,
          [imageShowTime] INTEGER DEFAULT 0 NOT NULL,
          [audio_id] INTEGER DEFAULT 'NULL'  NULL,
          [spinner_id] INTEGER DEFAULT 'NULL'  NULL,
          [scheduled] BOOLEAN DEFAULT 'true' NOT NULL,
          [program_type] VARCHAR(100) DEFAULT 'изображение' NOT NULL,
          FOREIGN KEY (audio_id)  REFERENCES audio (id) ON DELETE RESTRICT,
          FOREIGN KEY (spinner_id)  REFERENCES spinners (id) ON DELETE RESTRICT
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [programItems] (
          [id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
          [program_id] INTEGER  NOT NULL,
          [image_id] INTEGER  NOT NULL,
          [imageContent] TEXT  NOT NULL,
          [startDate] VARCHAR(10) NOT NULL,
          [endDate] VARCHAR(10) NOT NULL,
          [active] BOOLEAN DEFAULT 'true' NOT NULL,
          [always] BOOLEAN DEFAULT 'flase' NULL,
          FOREIGN KEY (program_id)  REFERENCES programs (id) ON DELETE CASCADE
          )
        `,
      )
      .run();
    this.db
      .prepare(
        `
        CREATE TABLE [spinners] (
          [id] INTEGER  PRIMARY KEY AUTOINCREMENT NOT NULL,
          [name] VARCHAR(100)  UNIQUE NOT NULL,
          [color1] VARCHAR(20) DEFAULT '""' NOT NULL,
          [color2] VARCHAR(20) DEFAULT '""' NOT NULL,
          [spin1] INTEGER DEFAULT '0' NOT NULL,
          [spin2] INTEGER DEFAULT '0' NOT NULL,
          [freq1] REAL DEFAULT '0' NOT NULL,
          [freq2] REAL DEFAULT '0' NOT NULL,
          [enabled1] INTEGER DEFAULT '1' NULL,
          [enabled2] INTEGER DEFAULT '1' NULL
          )
        `,
      )
      .run();
  }

  async fillDataV1(): Promise<void> {
    const settings = [
      {
        settingLabel: "порт",
        name: "port",
        value: "8880",
        editable: "true",
      },
      {
        settingLabel: "версия",
        name: "version",
        value: "1",
        editable: "false",
      },
      {
        settingLabel: "адрес домена",
        name: "domain",
        value: "192.168.1.26",
        editable: "true",
      },
    ];

    for (const setting of settings) {
      this.db
        .prepare(
          `
          INSERT INTO settings (label, name, value, editable) VALUES (?,?,?,?)
          `,
        )
        .run(
          setting.settingLabel,
          setting.name,
          setting.value,
          setting.editable,
        );
    }

    this.db
      .prepare(
        `
        INSERT INTO users ( username, name, password, role) VALUES (?,?,?,?)
        `,
      )
      .run(
        "bb-admin",
        "admin",
        `$2b$10$iURZVzs/LoEsdG23bA9KYOIR2Hg//UY2/FIaqqcepn.yZlfRuVDaW`,
        "admin",
      );

    const category = {
      name: "без категории",
      default: "true",
    };

    this.db
      .prepare(
        `
        INSERT INTO imageCategories ( name, isDefault ) VALUES (?,?)
        `,
      )
      .run(category.name, category.default);
  }

  async insert(table: string, record: unknown = {}): Promise<ApiResult> {
    const answer: ApiResult = { ...initResult };
    const fields: string[] = [];
    const values: string[] = [];
    for (const [key, value] of Object.entries(record)) {
      fields.push(key);
      values.push(value);
    }
    const fieldsStr = "'" + fields.join("','") + "'";
    const valuesStr = "'" + values.join("','") + "'";
    answer.result = this.db
      .prepare(
        `
        INSERT INTO ${table} (${fieldsStr}) VALUES (
          ${valuesStr})
          `,
      )
      .run();
    return answer;
  }

  async getAll(table: string, fields: string[] = []): Promise<ApiResult> {
    const answer: ApiResult = { ...initResult };
    const fieldsStr = fields.length === 0 ? "*" : fields.join(",");
    try {
      answer.result = this.db
        .prepare(
          `
          SELECT ${fieldsStr} FROM ${table}
          `,
        )
        .all();
    } catch (e) {
      answer.error = e;
    }
    return answer;
  }

  async getById(table: string, id: number): Promise<ApiResult> {
    const answer: ApiResult = { ...initResult };
    try {
      answer.result = this.db
        .prepare(
          `
          SELECT * from ${table} WHERE id=?
          `,
        )
        .get(id);
    } catch (e) {
      answer.error = e;
    }
    return answer;
  }

  async update(table: string, record: unknown = {}): Promise<any> {
    const answer: ApiResult = { ...initResult };
    const fields: string[] = [];
    let id = "";
    let setsStr = "";

    for (const [key, value] of Object.entries(record)) {
      if (key === "id") {
        id = value;
      } else {
        fields.push(`${key} = '${value}' `);
      }
    }
    setsStr = fields.join(",");

    try {
      this.db
        .prepare(
          `
        UPDATE ${table} 
        SET ${setsStr}
        WHERE id = ?
          `,
        )
        .run(id);
      answer.result = "Запись успешно сохранена.";
    } catch (e) {
      answer.error = `Ошибка сохранения записи на сервере. ${e}`;
    }
    return answer;
  }

  async remove(table: string, id: number): Promise<any> {
    const answer: ApiResult = { ...initResult };
    try {
      this.db
        .prepare(
          `
          DELETE FROM ${table} WHERE id=?
            `,
        )
        .run(id);
      answer.result = "Запись успешно удалена.";
    } catch (e) {
      answer.error = `Ошибка удаления записи на сервере. ${e}`;
    }
    return answer;
  }
}
