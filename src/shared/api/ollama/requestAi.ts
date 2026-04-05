import { OLLAMA_MODEL } from "@/shared/config";
import { ollamaClient } from "./ollamaClient";

export const requestAi = async (promt: string) => {
  const response = await ollamaClient.generate({
    model: OLLAMA_MODEL,
    prompt: promt,
    options: {
      num_predict: 200,
      temperature: 0.3,
    },
  });
  return response;
};
