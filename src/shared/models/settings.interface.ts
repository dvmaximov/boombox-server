export interface Setting {
  id: number;
  uuid: string;
  name: string;
  label: string;
  value: string;
  editable: string;
}

export type Settings = Setting[];
