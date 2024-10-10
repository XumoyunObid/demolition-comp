import axios from "axios";

export const request = axios.create({ 
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',  // Set the content type to form-data
    'accept': 'text/plain'
  }
});