import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tachyons";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

reportWebVitals();
