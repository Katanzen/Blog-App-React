import { NEW_POST } from "../actions/new_post";

export default function(state = {}, action) {
  // console.log(action.type);
  // console.log(action.payload);
  switch (action.type) {
    case NEW_POST:
      return action.payload;
    default:
      return state;
  }
}
