import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { CryptModule } from "../crypt/crypt.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { ApiModule } from "../api/api.module";

@Module({
  imports: [
    CryptModule,
    UsersModule,
    ApiModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "21600s" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
