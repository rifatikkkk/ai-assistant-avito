import { combineReducers } from "@reduxjs/toolkit";
import { adSlice } from "@/entities/ad/model/slice/adSlice";

export const rootReducer = combineReducers({
  ads: adSlice.reducer,
});
