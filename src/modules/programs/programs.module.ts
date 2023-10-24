import { Module, forwardRef } from "@nestjs/common";
import { ProgramsController } from "./programs.controller";
import { ProgramsItemsController } from "./programs-items.controller";
import { ProgramsService } from "./programs.service";
import { ProgramsItemsService } from "./programs-items.service";
import { WorkstationsModule } from "../workstations/workstations.module";

@Module({
  imports: [forwardRef(() => WorkstationsModule)],
  controllers: [ProgramsController, ProgramsItemsController],
  providers: [ProgramsService, ProgramsItemsService],
  exports: [ProgramsService, ProgramsItemsService],
})
export class ProgramsModule {}
