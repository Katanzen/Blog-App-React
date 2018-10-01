import { combineReducers } from "redux";
import postHashMapReducer from "./reducer_post_hash_map";
import { reducer as formReducer } from "redux-form";
// import newPostreducer from "./reducer_post_new";
const rootReducer = combineReducers({
  postHashMap: postHashMapReducer,
  form: formReducer
});

export default rootReducer;
