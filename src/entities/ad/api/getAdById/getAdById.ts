import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "@/shared/api";
import type { AdItem } from "../../model";
export const getAdById = createAsyncThunk<
  AdItem,
  number,
  { rejectValue: string }
>("ads/getAdById", async (id, { rejectWithValue }) => {
  try {
    const response = await httpClient.get(`/items/${id}`);
    return response.data as AdItem;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Ошибка загрузки",
    );
  }
});
