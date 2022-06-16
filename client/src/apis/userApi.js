import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1/users";

export default axios.create({
  baseURL,
});
