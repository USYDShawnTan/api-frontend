import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css"; // 引入 Tailwind CSS 文件

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
