import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost/career-counseling-backend/api",
  withCredentials: true
});

export default API;