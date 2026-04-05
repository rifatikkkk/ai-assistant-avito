import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "@/shared/api";

export const updateAd = createAsyncThunk<
  { success: boolean },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  { rejectValue: string }
>("ads/updateAd", async (updateData, { rejectWithValue }) => {
  try {
    const response = await httpClient.put(
      `/items/${updateData.id}`,
      updateData,
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Ошибка обновления",
    );
  }
});
