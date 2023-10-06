import { Global, Module } from "@nestjs/common";
import { ApiService } from "./api.service";
import { SocketService } from "./socket.service";
import { WorkstationsModule } from "../workstations/workstations.module";

@Global()
@Module({
  imports: [WorkstationsModule],
  providers: [ApiService, SocketService],
  exports: [ApiService, SocketService],
})
export class ApiModule {}
