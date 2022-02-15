import axios from "axios";
export default axios.create({
  baseURL: "https://localhost:44359",
  headers: {
    "Content-type": "application/json"
  }
});