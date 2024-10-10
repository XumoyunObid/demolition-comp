import axios from "axios";

export const request = axios.create({ 
  baseURL: "http://45.130.148.160:5555",
  headers: {
    'Content-Type': 'multipart/form-data',  // Set the content type to form-data
    'accept': 'text/plain'
  }
});