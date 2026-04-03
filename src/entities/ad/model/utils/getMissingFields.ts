import { fieldLabels, requiredFieldsByCategory } from "../config/adFields";
import type { AdItem } from "../types/AdSchema";

export const getMissingFields = (ad: AdItem | null): string[] => {
  if (!ad) return [];

  const missingFields: string[] = [];

  if (!ad.title) missingFields.push("title");
  if (!ad.description) missingFields.push("description");
  if (!ad.price) missingFields.push("price");

  const requiredFields = requiredFieldsByCategory[ad.category] || [];

  if (ad.params) {
    for (const field of requiredFields) {
      const value = ad.params[field as keyof typeof ad.params];
      const isEmpty = value === undefined || value === null || value === "";

      if (isEmpty) {
        missingFields.push(field);
      }
    }
  }

  return missingFields.map((field) => fieldLabels[field] || field);
};
