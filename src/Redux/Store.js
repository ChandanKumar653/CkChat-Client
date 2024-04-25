import { configureStore } from "@reduxjs/toolkit";
import TestReducer from "./Slices/TestSlice";
export const store = configureStore({
  reducer: {
    counter: TestReducer,
  },
});
