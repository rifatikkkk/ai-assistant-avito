import { API_OLLAMA_KEY } from "@/shared/config";
import { Ollama } from "ollama";

export const ollamaClient = new Ollama({
  host: "http://localhost:11434",
  headers: { Authorization: "Bearer " + API_OLLAMA_KEY },
});
