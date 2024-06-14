import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScroolToTop from "./components/ScroolToTop.jsx";

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/css/main.css";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScroolToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
