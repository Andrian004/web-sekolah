import axios from "axios";

export const apiAuth = axios.create({
  baseURL: "https://web-sekolah-production.up.railway.app/user/",
});

export const API_METHODS = {
  GET: "POST",
} as const;
