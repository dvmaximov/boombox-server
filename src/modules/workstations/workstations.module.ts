import { Module } from "@nestjs/common";
import { WorkstationsController } from "./workstations.controller";
import { WorkstationsService } from "./workstations.service";
import { ProgramsModule } from "../programs/programs.module";

@Module({
  controllers: [WorkstationsController],
  providers: [WorkstationsService],
  exports: [WorkstationsService],
  imports: [ProgramsModule],
})
export class WorkstationsModule {}
