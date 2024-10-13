import axios from "axios";

const instance = axios.create({
  baseURL: "https://27dv54-8080.csb.app",
  // baseURL: "http://localhost:3000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  },
});

export default instance;
