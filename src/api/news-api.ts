import axios from "axios";

export const apiNews = axios.create({
  baseURL: "https://web-sekolah-production.up.railway.app/berita/",
});

export const API_METHODS = {
  GET: "GET",
} as const;
