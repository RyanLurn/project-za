import { scan } from "react-scan";
// must be imported before React and React DOM
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "@/components/providers";
import "@/index.css";
import { env } from "@/lib/env";

scan({
  enabled: env.VITE_ENABLE_REACT_SCAN === "true"
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
