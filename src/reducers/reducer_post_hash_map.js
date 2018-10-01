import { POST_INDEX } from "../actions/get_posts_index";

export default function(state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case POST_INDEX:
      return action.payload;

    default:
      return state;
  }
}
