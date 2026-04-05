import type { FormDataUpdate } from "@/entities/ad/model";

export const promptPrice = (item: FormDataUpdate) => {
  const { title, price, description, category, params } = item;

  let prompt =
    `Напиши мне примерную стоимость ${title || "товара"} и диапазон цен (числа пиши без точек и пробелов).` +
    `Будь краток и конкретен. При ответе не пиши лишние комментарии, напиши строго по формату (заголовок и 2 пункта):` +
    `Средняя цена на ${title}\n` +
    `1. Примерная цена: [число] ₽` +
    `2. Диапазон цен: [число] ₽`;

  // for more details
  // if (category === "auto") {
  //   prompt +=
  //     `Категория: Автомобиль` +
  //     `Характеристики:` +
  //     `${params.brand ? `- Бренд: ${params.brand}` : ""}` +
  //     `${params.model ? `- Модель: ${params.model}` : ""}` +
  //     `${params.yearOfManufacture ? `- Год выпуска: ${params.yearOfManufacture}` : ""}` +
  //     `${params.transmission ? `- Коробка передач: ${params.transmission === "automatic" ? "Автомат" : "Механика"}` : ""}` +
  //     `${params.mileage ? `- Пробег: ${params.mileage} км` : ""}` +
  //     `${params.enginePower ? `- Мощность: ${params.enginePower} л.с.` : ""}`;
  // } else if (category === "real_estate") {
  //   prompt +=
  //     `Категория: Недвижимость` +
  //     `Характеристики:` +
  //     `${params.type ? `- Тип: ${params.type === "flat" ? "Квартира" : params.type === "house" ? "Дом" : "Комната"}` : ""}` +
  //     `${params.address ? `- Адрес: ${params.address}` : ""}` +
  //     `${params.area ? `- Площадь: ${params.area} м²` : ""}` +
  //     `${params.floor ? `- Этаж: ${params.floor}` : ""}`;
  // } else if (category === "electronics") {
  //   prompt +=
  //     `Категория: Электроника` +
  //     `Характеристики:` +
  //     `${params.type ? `- Тип: ${params.type === "phone" ? "Телефон" : params.type === "laptop" ? "Ноутбук" : "Разное"}` : ""}` +
  //     `${params.brand ? `- Бренд: ${params.brand}` : ""}` +
  //     `${params.model ? `- Модель: ${params.model}` : ""}` +
  //     `${params.condition ? `- Состояние: ${params.condition === "new" ? "Новое" : "Б/у"}` : ""}` +
  //     `${params.color ? `- Цвет: ${params.color}` : ""}`;
  // }

  return prompt;
};
