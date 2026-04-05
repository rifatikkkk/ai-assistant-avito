import type { FormDataUpdate } from "@/entities/ad/model";

export const promptDesc = (item: FormDataUpdate) => {
  const { title, price, description } = item;

  let prompt =
    `Напиши описание к ${title} от первого лица, который опубликовывает объявление на продажу` +
    `Цена у товара ${price}` +
    `Предыдущее описание ${description}` +
    `Описание не должно составлять более 800 символов.`;

  return prompt;
};
