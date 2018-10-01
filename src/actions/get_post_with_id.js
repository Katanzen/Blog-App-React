import axios from "axios";

export const POST_ID = "post_id";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=lalala";

export default function(id, callback) {
  const COMP_URL = ROOT_URL + "/" + id + API_KEY;
  const request = axios.get(COMP_URL).then(() => callback());
  return {
    type: POST_ID,
    payload: request
  };
}
