import { Global, Module, forwardRef } from "@nestjs/common";
import { ApiService } from "./api.service";
import { SocketService } from "./socket.service";
import { WorkstationsModule } from "../workstations/workstations.module";
import { ProgramsModule } from "../programs/programs.module";
import { SpinnersModule } from "../spinners/spinners.module";
import { AudioModule } from "../audio/audio.module";

@Global()
@Module({
  imports: [
    forwardRef(() => WorkstationsModule),
    ProgramsModule,
    SpinnersModule,
    AudioModule,
  ],
  providers: [ApiService, SocketService],
  exports: [ApiService, SocketService],
})
export class ApiModule {}
