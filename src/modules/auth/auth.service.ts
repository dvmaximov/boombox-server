import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CryptService } from "../crypt/crypt.service";
import { ApiService } from "../api/api.service";
import { ApiResult } from "src/shared/models/api.interface";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly crypt: CryptService,
    private readonly api: ApiService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const check = await this.crypt.match(pass, user?.password);
    if (!check) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userID, username: user.username };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

  async getHash(username: string, pass: string): Promise<ApiResult> {
    const newHash = await this.crypt.getHash(pass);
    const user = await this.usersService.findOne(username);
    user.password = newHash;
    return this.api.update("users", user);
  }
}
