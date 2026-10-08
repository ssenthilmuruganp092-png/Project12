import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { LibraryProvider } from "./context/LibraryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </BrowserRouter>
);