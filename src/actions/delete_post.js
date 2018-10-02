import axios from "axios";

export const DELETED_ID = "Deleted_id";
const ROOT_URL = "http://reduxblog.herokuapp.com/api/posts";
const API_KEY = "?key=lalala";

export default function(id, callback) {
  const COMP_URL = ROOT_URL + "/" + id + API_KEY;
  axios.delete(COMP_URL).then(() => callback());
  return {
    type: DELETED_ID,
    payload: id
  };
}
