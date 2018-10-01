import axios from "axios";
export const NEW_POST = "new_post";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=lalala";
const COMP_URL = ROOT_URL + API_KEY;
export default function(values, callback) {
  const request = axios.post(COMP_URL, values).then(() => callback());

  return {
    type: NEW_POST,
    payload: request
  };
}
