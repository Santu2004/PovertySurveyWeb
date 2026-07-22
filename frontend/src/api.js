import axios from "axios";

const api = axios.create({
  baseURL: "https://poverty-survey-web.vercel.app//api",
});

export default api;