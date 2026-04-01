import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "@/shared/api";
import type { Ad } from "../../model/types/AdSchema";

export const getAds = createAsyncThunk<Ad[], void, { rejectValue: string }>(
  "ads/getAds",
  async (_, { rejectWithValue }) => {
    try {
      const response = await httpClient.get("/items");
      return response.data.items as Ad[];
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Ошибка загрузки",
      );
    }
  },
);
