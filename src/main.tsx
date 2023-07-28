import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
