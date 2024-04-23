import { PROXIMITY_MODE } from "../types/enumeration";
import { Comment } from "../types/comment";

export const project_detail_mock_comments: Comment[] = [
  { 
    comment_id: '1',
    poster: 'Mary',
    poster_position: 'President',
    created_time: new Date("22 September 2023 12:00"),
    content: 'Hi, when can I see the JR Form update?',
    proximity_mode: PROXIMITY_MODE.VICINITY_TO_CUSTOMER,
    related_file: 'test.pdf'
  }
]