import { Global, Module, forwardRef } from "@nestjs/common";
import { ApiService } from "./api.service";
import { SocketService } from "./socket.service";
import { WorkstationsModule } from "../workstations/workstations.module";

@Global()
@Module({
  imports: [forwardRef(() => WorkstationsModule)],
  providers: [ApiService, SocketService],
  exports: [ApiService, SocketService],
})
export class ApiModule {}
