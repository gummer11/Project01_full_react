import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://project01-full-react.onrender.com";
dev;
//(import.meta.env.MODE = "https://project01-full-react.onrender.com"); //production

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
