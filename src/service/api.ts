import axios from 'axios';

// const URL = import.meta.env.VITE_API_URL; // example to use .env 
const URL = 'https://movies.slideworks.cc/movies'; 

const api = axios.create({
  baseURL: URL,
});

export default api;