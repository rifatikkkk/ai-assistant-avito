import { type RootState } from "@/app/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectAllAds = (state: RootState) => state.ads.items;
export const selectDisplayedAds = (state: RootState) =>
  state.ads.displayedItems;
export const selectTotalCount = (state: RootState) => state.ads.total;
export const selectAdsStatus = (state: RootState) => state.ads.status;
export const selectAdById = (state: RootState, id: number) =>
  state.ads.items.find((ad) => ad.id === id);
export const selectAdsByCategory = (state: RootState, category: string) =>
  state.ads.items.filter((ad) => ad.category === category);
export const selectSearchParams = (state: RootState) => state.ads.searchParams;
export const selectSortDirection = (state: RootState) =>
  state.ads.searchParams.sortDirection;
export const selectAllCategories = (state: RootState) =>
  state.ads.allCategories;
export const selectPriceSortDirection = (state: RootState) =>
  state.ads.priceSortDirection;
export const selectCurrentPage = (state: RootState) => state.ads.currentPage;
export const selectItemsPerPage = (state: RootState) => state.ads.itemsPerPage;
export const selectTotalPages = (state: RootState) => {
  return Math.ceil(state.ads.total / state.ads.itemsPerPage);
};

export const selectSelectedCategories = createSelector(
  [selectSearchParams],
  (searchParams) => {
    const categories = searchParams.categories;
    return categories ? categories.split(",") : [];
  },
);
