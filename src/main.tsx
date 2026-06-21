import { createRoot } from "react-dom/client";
import "./index.css";
import RouterApp from "./routes/RouterApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>,
);
