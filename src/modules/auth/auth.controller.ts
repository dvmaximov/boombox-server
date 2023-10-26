import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiResult, initResult } from "src/shared/models/api.interface";

@Controller("api/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
    const answer = { ...initResult };
    try {
      const token = await this.authService.signIn(
        "bb-admin",
        signInDto.password,
      );
      answer.result = { ...token };
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }

  @HttpCode(HttpStatus.OK)
  @Post("change")
  async change(@Body() signInDto: Record<string, any>): Promise<ApiResult> {
    const answer = { ...initResult };
    try {
      answer.result = await this.authService.getHash(
        "bb-admin",
        signInDto.password,
      );
    } catch (err) {
      answer.error = err;
    }
    return answer;
  }
}
