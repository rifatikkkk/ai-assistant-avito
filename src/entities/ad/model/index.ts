export { updateDisplayedItems } from "./utils/updateDisplayedItems";
export { sortByPrice } from "./utils/sortByPrice";

export {
  selectAdById,
  selectDisplayedAds,
  selectTotalCount,
  selectAdsByCategory,
  selectAllAds,
  selectAdsStatus,
  selectSearchParams,
  selectSortDirection,
  selectAllCategories,
  selectPriceSortDirection,
  selectCurrentPage,
  selectItemsPerPage,
  selectTotalPages,
  selectSelectedCategories,
} from "./selectors/adSelectors";

export {
  adSlice,
  setSearchParams,
  resetSearchParams,
  clearAds,
  applyPriceSort,
  setCurrentPage,
  setItemsPerPage,
} from "./slice/adSlice";

export type {
  Ad,
  AdsState,
  GetAdsParams,
  PriceSortDirection,
} from "./types/AdSchema";
