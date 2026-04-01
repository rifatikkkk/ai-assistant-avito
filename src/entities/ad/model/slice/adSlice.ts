import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AdsState, GetAdsParams } from "../types/AdSchema";
import { getAds } from "../../api";

const initialState: AdsState = {
  items: [],
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
    },
    resetSearchParams: (state) => {
      state.searchParams = initialState.searchParams;
      state.status = "idle";
    },
    clearAds: (state) => {
      state.items = [];
      state.total = 0;
      state.status = "idle";
    },
    setAllCategories: (state, action: PayloadAction<string[]>) => {
      state.allCategories = action.payload;
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
        state.items = action.payload.items;
        state.total = action.payload.total;

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
      });
  },
});

export const {
  setSearchParams,
  resetSearchParams,
  clearAds,
  setAllCategories,
} = adSlice.actions;
