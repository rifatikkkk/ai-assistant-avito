export const fieldLabels: Record<string, string> = {
  title: "Название",
  description: "Описание",
  price: "Цена",
  brand: "Бренд",
  model: "Модель",
  type: "Тип",
  yearOfManufacture: "Год выпуска",
  transmission: "Коробка передач",
  mileage: "Пробег",
  enginePower: "Мощность двигателя",
  address: "Адрес",
  area: "Площадь",
  floor: "Этаж",
  condition: "Состояние",
  color: "Цвет",
};

export const requiredFieldsByCategory: Record<string, string[]> = {
  auto: [
    "brand",
    "brand",
    "model",
    "yearOfManufacture",
    "transmission",
    "mileage",
    "enginePower",
  ],
  real_estate: ["type", "address", "area", "floor"],
  electronics: ["type", "brand", "model", "condition", "color"],
};
