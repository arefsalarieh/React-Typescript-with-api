import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import Provider from "./core/services/providers/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
