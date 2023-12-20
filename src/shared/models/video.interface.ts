export interface Video {
  id?: number;
  name: string;
  content?: string;
  category: string;
  video_type: string;
}

export const VideoType = {
  FILE: "файл",
  YOUTUBE: "youtube",
};
