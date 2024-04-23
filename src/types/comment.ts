import { PROXIMITY_MODE } from "./enumeration";

export interface Comment {
  comment_id: string,
  poster: string,
  poster_position: string,
  created_time: Date,
  content: string,
  proximity_mode: PROXIMITY_MODE,
  related_file: string,
}

