import axios from "axios";

const api = axios.create({
  baseURL: "http://192.178.31.100:3333",
});

export default api;
