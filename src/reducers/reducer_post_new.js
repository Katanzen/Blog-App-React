import { NEW_POST } from "../actions/new_post";

export default function(state = {}, action) {
  switch (action.type) {
    case NEW_POST:
      return action.payload;
    default:
      return state;
  }
}
