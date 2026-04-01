import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpClient } from "@/shared/api";
import type { Ad, GetAdsParams } from "../../model/types/AdSchema";

interface ItemsResponse {
  items: Ad[];
  total: number;
}

export const getAds = createAsyncThunk<
  ItemsResponse,
  GetAdsParams | void,
  { rejectValue: string }
>("ads/getAds", async (params, { rejectWithValue }) => {
  try {
    const queryParams = new URLSearchParams();

    if (params && typeof params === "object") {
      if (params.q) queryParams.append("q", params.q);
      if (params.limit) queryParams.append("limit", params.limit.toString());
      if (params.skip) queryParams.append("skip", params.skip.toString());
      if (params.needsRevision !== undefined)
        queryParams.append("needsRevision", params.needsRevision.toString());
      if (params.categories)
        queryParams.append("categories", params.categories);
      if (params.sortColumn)
        queryParams.append("sortColumn", params.sortColumn);
      if (params.sortDirection)
        queryParams.append("sortDirection", params.sortDirection);
    }

    const url = `/items${queryParams.toString() ? `?${queryParams.toString()}` : ""}`;

    const response = await httpClient.get(url);
    return response.data as ItemsResponse;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Ошибка загрузки",
    );
  }
});
