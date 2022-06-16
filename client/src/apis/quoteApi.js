import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/quotes"
    : "http://localhost:8000/api/v1/quotes";

export default axios.create({
  baseURL,
});
