import { ollamaClient } from "@/shared/api";
import { promptPrice } from "../prompt/promptPrice";
import type { FormDataUpdate } from "@/entities/ad/model";

export const requestAi = async (value: FormDataUpdate) => {
  const dynamicPrompt = promptPrice(value);

  const response = await ollamaClient.generate({
    model: "phi3:mini",
    prompt: dynamicPrompt,
    options: {
      num_predict: 200,
      temperature: 0.3,
    },
  });
  console.log(response.response);
  return response;
};
