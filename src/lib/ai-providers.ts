import { createGroq } from "@ai-sdk/groq";
import { env } from "@/lib/env";

const groq = createGroq({
  apiKey: env.VITE_GROQ_API_KEY
});

export { groq };
