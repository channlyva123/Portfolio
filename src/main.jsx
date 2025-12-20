import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./router/Routes.jsx";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes>
        <App></App>
      </Routes>
    </ThemeProvider>
  </React.StrictMode>
);
