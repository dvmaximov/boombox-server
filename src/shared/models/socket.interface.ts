export enum StationType {
  UI,
  Workstation,
}

export interface Station {
  stationType: StationType;
  stationName: string;
}

export interface Message {
  station: Station;
  message: unknown;
}

export interface ServerToClientEvents {
  registration: (e: Message) => void;
  setProgram: (e: Message) => void;
  getProgram: (e: Message) => void;
  updateWorkstations: (e: Message) => void;
  getProgramItems: (e: Message) => void;
}

export interface ClientToServerEvents {
  registration: (e: Message) => void;
  getProgram: (e: Message) => void;
  updateProgram: (e: Message) => void;
  getProgramItems: (e: Message) => void;
}
