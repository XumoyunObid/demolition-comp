import axios from "axios";

export const request = axios.create({ 
  baseURL: "https://api.shikkari-kaitai.jp",
  headers: {
    'Content-Type': 'multipart/form-data', 
    'accept': 'text/plain'
  }
});