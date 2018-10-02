import { POST_ID } from "../actions/get_post_with_id";

export default function(state = {}, action) {
  switch (action.type) {
    case POST_ID:
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
