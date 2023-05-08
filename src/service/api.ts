import axios from "axios";

// const URL = import.meta.env.VITE_API_URL; // example to use .env
const URL = "https://movies.slideworks.cc/movies";

const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // example to use cors
    "Access-Control-Allow-Headers": "*", // example to use cors
  },
});

export default api;
