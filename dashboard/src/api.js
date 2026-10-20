import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.PROD
    ? "https://equiflow-backend-wb75.onrender.com"
    : (import.meta.env.VITE_API_URL || "http://localhost:3002"),
  withCredentials: true,
});

export default api;
