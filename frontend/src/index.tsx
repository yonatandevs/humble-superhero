// Entry point for the React application
// Ensure `index.css` is imported to apply Tailwind CSS styles

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css"; // Tailwind CSS styles
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
