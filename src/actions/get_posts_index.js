import axios from "axios";
export const POST_INDEX = "post_index";

const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=lalala";
const COMP_URL = ROOT_URL + API_KEY;
export default function() {
  const request = axios.get(COMP_URL);
  console.log(request);
  return {
    type: POST_INDEX,
    payload: request
  };
}
