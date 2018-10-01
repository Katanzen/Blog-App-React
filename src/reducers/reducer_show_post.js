import { POST_ID } from "../actions/get_post_with_id";

export default function(state = {}, action) {
  // console.log(action.type);
  // console.log(action.payload);

  switch (action.type) {
    case POST_ID:
      return action.payload;

    default:
      return state;
  }
}
