import axios from "axios";

export default axios.create({
  baseURL: "http://35.222.66.155:3000",
  headers: {
    "Content-type": "application/json"
  }
});