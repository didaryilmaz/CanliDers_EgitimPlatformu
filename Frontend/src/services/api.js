import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5194" 
});

export default api;
