import type { Ad } from "../types/AdSchema";

export type PriceSortDirection = "price_asc" | "price_desc";

export const sortByPrice = (ads: Ad[], direction: PriceSortDirection): Ad[] => {
  if (ads.length === 0) return ads;

  const sorted = [...ads];

  if (direction === "price_asc") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (direction === "price_desc") {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return ads;
};
