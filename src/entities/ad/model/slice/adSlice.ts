import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ad, GetAdsParams } from "../types/AdSchema";
import { getAds } from "../../api";

interface AdsState {
  items: Ad[];
  total: number;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  searchParams: GetAdsParams;
}

const initialState: AdsState = {
  items: [],
  total: 0,
  status: "idle",
  error: null,
  searchParams: {
    q: "",
    limit: null,
    skip: 0,
    sortColumn: "createdAt",
    sortDirection: "desc",
  },
};

export const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<Partial<GetAdsParams>>) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
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
      })
      .addCase(getAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setSearchParams, resetSearchParams, clearAds } = adSlice.actions;
