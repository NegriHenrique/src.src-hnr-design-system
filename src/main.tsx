import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Button, Info } from "hnr-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Info variant="info">Teste</Info>
    <Button variant="primary" className="custom-class">Hello from Button</Button>
  </StrictMode>,
);
