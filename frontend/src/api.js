import axios from "axios";

const api = axios.create({
  baseURL: "https://surveyweb-j567.onrender.com/api",
});

export default api;