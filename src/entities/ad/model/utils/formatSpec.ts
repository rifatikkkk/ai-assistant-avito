import { fieldLabels } from "../config/adFields";
import type { AdItem } from "../types/AdSchema";

interface SpecItem {
  name: string;
  value: string;
}

const formatSpec = (key: string, value: string | number): string => {
  if (value === undefined || value === null) return "—";

  switch (key) {
    case "mileage":
      return `${value.toLocaleString()} км`;
    case "enginePower":
      return `${value} л.с.`;
    case "area":
      return `${value} м²`;
    case "yearOfManufacture":
      return `${value} г.`;
    case "transmission":
      return value === "automatic" ? "Автомат" : "Механика";
    case "condition":
      return value === "new" ? "Новый" : "Б/у";
    case "type":
      if (value === "flat") return "Квартира";
      if (value === "house") return "Дом";
      if (value === "room") return "Комната";
      if (value === "phone") return "Телефон";
      if (value === "misc") return "Разное";
      return String(value);
    default:
      return String(value);
  }
};

export const getSpecItems = (ad: AdItem | null): SpecItem[] => {
  if (!ad?.params) return [];

  return Object.entries(ad.params)
    .filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]) => value !== undefined && value !== null && value !== "",
    )
    .map(([key, value]) => ({
      name: fieldLabels[key] || key,
      value: formatSpec(key, value),
    }));
};
