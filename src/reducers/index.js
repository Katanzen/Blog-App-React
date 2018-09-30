import { combineReducers } from "redux";
import postHashMapReducer from "./reducer_post_hash_map";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  postHashMap: postHashMapReducer,
  form: formReducer
});

export default rootReducer;
