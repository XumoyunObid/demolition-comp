import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
