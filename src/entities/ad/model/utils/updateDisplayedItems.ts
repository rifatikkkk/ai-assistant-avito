import type { AdsState } from "../types/AdSchema";

export const updateDisplayedItems = (state: AdsState) => {
  const startIndex = (state.currentPage - 1) * state.itemsPerPage;
  const endIndex = startIndex + state.itemsPerPage;
  state.displayedItems = state.items.slice(startIndex, endIndex);
};
