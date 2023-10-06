import { Module } from "@nestjs/common";
import { SpinnersService } from "./spinners.service";
import { SpinnersController } from "./spinners.controller";

@Module({
  providers: [SpinnersService],
  controllers: [SpinnersController],
})
export class SpinnersModule {}
