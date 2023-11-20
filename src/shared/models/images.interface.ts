export interface Image {
  id?: number;
  name: string;
  content?: string;
  category: string;
  descriptor?: string;
}

export interface ImageCategory {
  id?: number;
  name: string;
  isDefault?: string;
}
