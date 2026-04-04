export {
  transformFromApiData,
  transformToSubmitData,
} from "./utils/transformData";
export { getMissingFields } from "./utils/getMissingFields";
export { formatDate } from "./utils/formatDate";
export { updateDisplayedItems } from "./utils/updateDisplayedItems";
export { sortByPrice } from "./utils/sortByPrice";

export {
  selectAdById,
  selectDisplayedAds,
  selectCurrentAd,
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
  selectIsDisplayGrid,
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
  setDisplayMode,
  clearCurrentAd,
} from "./slice/adSlice";

export type {
  Ad,
  AdsState,
  GetAdsParams,
  PriceSortDirection,
  AdItem,
  AutoItemParams,
  ElectronicsItemParams,
  RealEstateItemParams,
} from "./types/AdSchema";

export type { FormDataUpdate, SubmitData } from "./types/dataForm";

export { fieldLabels, requiredFieldsByCategory } from "./config/adFields";
