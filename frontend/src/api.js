import axios from "axios";

const api = axios.create({
  baseURL: "https://povertysurveyweb-1.onrender.com/api",
});

export default api;