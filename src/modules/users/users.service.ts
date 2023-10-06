import { Injectable } from "@nestjs/common";
import { User } from "../../shared/models/user.interface";
import { ApiService } from "../api/api.service";

@Injectable()
export class UsersService {
  constructor(private readonly api: ApiService) {}

  async findOne(username: string): Promise<User | undefined> {
    const users = await this.api.getAll("users");
    return users.result.find((user: User) => user.username === username);
  }
}
