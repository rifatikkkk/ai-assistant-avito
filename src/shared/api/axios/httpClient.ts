import { API_URL } from "@/shared/config";
import axios from "axios";

export const httpClient = axios.create({
  baseURL: API_URL,
  withCredentials: false,
  timeout: 50000,
});
