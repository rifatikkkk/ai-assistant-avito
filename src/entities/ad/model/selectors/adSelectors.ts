import { type RootState } from "@/app/store/store";

export const selectAllAds = (state: RootState) => state.ads.items;
export const selectTotalCount = (state: RootState) => state.ads.total;
export const selectAdsStatus = (state: RootState) => state.ads.status;
export const selectAdById = (state: RootState, id: number) =>
  state.ads.items.find((ad) => ad.id === id);
export const selectAdsByCategory = (state: RootState, category: string) =>
  state.ads.items.filter((ad) => ad.category === category);
export const selectSearchParams = (state: RootState) => state.ads.searchParams;
export const selectAllCategories = (state: RootState) =>
  state.ads.allCategories;
export const selectSelectedCategories = (state: RootState) => {
  const categories = state.ads.searchParams.categories;
  return categories ? categories.split(",") : [];
};
