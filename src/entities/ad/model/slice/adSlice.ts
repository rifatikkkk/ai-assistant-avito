import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  AdsState,
  GetAdsParams,
  PriceSortDirection,
} from "../types/AdSchema";
import { getAdById, getAds } from "../../api";
import { sortByPrice } from "../utils/sortByPrice";
import { updateDisplayedItems } from "../utils/updateDisplayedItems";

const initialState: AdsState = {
  items: [],
  displayedItems: [],
  currentAd: null,
  total: 0,
  status: "idle",
  error: null,
  searchParams: {
    q: "",
    limit: 100,
    skip: 0,
    sortColumn: null,
    sortDirection: null,
  },
  allCategories: [],
  priceSortDirection: null,
  currentPage: 1,
  itemsPerPage: 10,
  isDisplayGrid: true,
};

export const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<Partial<GetAdsParams>>) => {
      state.searchParams = {
        ...state.searchParams,
        ...action.payload,
      };
      state.status = "idle";
      state.currentPage = 1;
    },
    resetSearchParams: (state) => {
      state.searchParams = initialState.searchParams;
      state.status = "idle";
      state.currentPage = 1;
    },
    clearAds: (state) => {
      state.items = [];
      state.displayedItems = [];
      state.total = 0;
      state.status = "idle";
      state.currentPage = 1;
    },
    setAllCategories: (state, action: PayloadAction<string[]>) => {
      state.allCategories = action.payload;
    },

    applyPriceSort: (state, action: PayloadAction<PriceSortDirection>) => {
      state.priceSortDirection = action.payload;
      state.currentPage = 1;
      if (action.payload)
        state.items = sortByPrice(state.items, action.payload);
      updateDisplayedItems(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      updateDisplayedItems(state);
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
      updateDisplayedItems(state);
    },
    setDisplayMode: (state, action: PayloadAction<boolean>) => {
      state.isDisplayGrid = action.payload;
    },

    clearCurrentAd: (state) => {
      state.currentAd = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAds.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAds.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (state.priceSortDirection) {
          state.items = sortByPrice(
            action.payload.items,
            state.priceSortDirection,
          );
        } else {
          state.items = action.payload.items;
        }

        state.total = action.payload.total;
        state.currentPage = 1;
        updateDisplayedItems(state);

        if (state.allCategories.length === 0) {
          const categories = new Set<string>();
          action.payload.items.forEach((item) => {
            if (item.category) {
              categories.add(item.category);
            }
          });
          state.allCategories = Array.from(categories).sort();
        }
      })
      .addCase(getAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })

      .addCase(getAdById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAdById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentAd = action.payload;
      })
      .addCase(getAdById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
        state.currentAd = null;
      });
  },
});

export const {
  setSearchParams,
  resetSearchParams,
  clearAds,
  setAllCategories,
  applyPriceSort,
  setCurrentPage,
  setItemsPerPage,
  setDisplayMode,
  clearCurrentAd,
} = adSlice.actions;
