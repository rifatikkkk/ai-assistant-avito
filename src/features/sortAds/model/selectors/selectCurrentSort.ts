import {
  selectPriceSortDirection,
  selectSearchParams,
} from "@/entities/ad/model";
import { createSelector } from "@reduxjs/toolkit";
import type { SortOption } from "../options/optionsSort";

export const selectCurrentSort = createSelector(
  [selectSearchParams, selectPriceSortDirection],
  (searchParams, priceSortDirection): SortOption => {
    if (priceSortDirection === "price_asc") return "price_asc";
    if (priceSortDirection === "price_desc") return "price_desc";

    if (
      searchParams.sortColumn === "title" &&
      searchParams.sortDirection === "asc"
    ) {
      return "title_asc";
    }
    if (
      searchParams.sortColumn === "title" &&
      searchParams.sortDirection === "desc"
    ) {
      return "title_desc";
    }

    if (
      searchParams.sortColumn === "createdAt" &&
      searchParams.sortDirection === "asc"
    ) {
      return "createdAt_asc";
    }
    if (
      searchParams.sortColumn === "createdAt" &&
      searchParams.sortDirection === "desc"
    ) {
      return "createdAt_desc";
    }

    return "default";
  },
);
