import { Module } from "@nestjs/common";
import { ProgramsController } from "./programs.controller";
import { ProgramsItemsController } from "./programs-items.controller";
import { ProgramsService } from "./programs.service";
import { ProgramsItemsService } from "./programs-items.service";

@Module({
  controllers: [ProgramsController, ProgramsItemsController],
  providers: [ProgramsService, ProgramsItemsService],
})
export class ProgramsModule {}
