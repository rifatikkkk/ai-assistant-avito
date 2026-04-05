import type { FormDataUpdate } from "@/entities/ad/model";

export const promptPrice = (item: FormDataUpdate) => {
  const { title, price } = item;

  const prompt =
    `Напиши мне примерную стоимость ${title || "товара"} и диапазон цен (числа пиши без точек и пробелов).` +
    `На данный момент я оцениваю товара в ${price || 0} рублей.` +
    `Будь краток и конкретен. При ответе не пиши лишние комментарии, напиши строго по формату (заголовок и 2 пункта):` +
    `Средняя цена на ${title}\n` +
    `1. Примерная цена: [число] ₽` +
    `2. Диапазон цен: [число] ₽`;

  return prompt;
};
