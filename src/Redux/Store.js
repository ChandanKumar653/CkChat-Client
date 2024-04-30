import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Slices/ApiSlice";
import TestSlice from "./Slices/TestSlice";
import AuthSlice from "./Slices/AuthSlice";
export const store = configureStore({
  reducer: {
    api: apiReducer,
    counter:TestSlice,
    auth:AuthSlice
  },
});
