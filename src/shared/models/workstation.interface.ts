import { StationType } from "./socket.interface";

export interface Workstation {
  name: string;
  stationType: StationType;
  socketId: string;
}

export type Workstations = Workstation[];
