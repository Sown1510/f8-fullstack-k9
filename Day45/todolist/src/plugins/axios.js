import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  },
});

export default instance;
