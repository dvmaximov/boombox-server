import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CryptService } from "../crypt/crypt.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly crypt: CryptService,
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
}
