import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Ad } from "../types/AdSchema";
import { getAds } from "../../api";

interface AdsState {
  items: Ad[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdsState = {
  items: [],
  status: "idle",
  error: null,
};

export const adSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    addAd: (state, action: PayloadAction<Ad>) => {
      state.items.push(action.payload);
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
        state.items = action.payload;
      })
      .addCase(getAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { addAd } = adSlice.actions;
