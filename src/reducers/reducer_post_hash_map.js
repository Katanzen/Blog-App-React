import { POST_INDEX } from "../actions/get_posts_index";

export default function(state = {}, action) {
  switch (action.type) {
    case POST_INDEX:
      return action.payload;

    default:
      return state;
  }
}
