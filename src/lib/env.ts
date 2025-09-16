import { createEnv } from "@t3-oss/env-core";
import * as z from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_SURREAL_ENDPOINT: z.string().min(1),
    VITE_SURREAL_NAMESPACE: z.string().min(1),
    VITE_SURREAL_DATABASE: z.string().min(1)
  },
  runtimeEnv: import.meta.env
});
