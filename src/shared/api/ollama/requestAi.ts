import { ollamaClient } from "./ollamaClient";

export const requestAi = async (promt: string) => {
  const response = await ollamaClient.generate({
    model: "phi3:mini",
    prompt: promt,
    options: {
      num_predict: 200,
      temperature: 0.3,
    },
  });
  console.log(response.response);
  return response;
};
