import axios from "axios";

export const httpClient = axios.create({
  baseURL: "/api",
  withCredentials: false,
  timeout: 50000,
});
