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
}

export interface ClientToServerEvents {
  registration: (e: Message) => void;
}
