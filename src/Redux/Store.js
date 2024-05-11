import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./Slices/ApiSlice";
import TestSlice from "./Slices/TestSlice";
import AuthSlice from "./Slices/AuthSlice";
import PersonalChatSlice from "./Slices/PersonalChatSlice";
export const store = configureStore({
  reducer: {
    api: apiReducer,
    counter:TestSlice,
    auth:AuthSlice,
    personalChat:PersonalChatSlice
  },
});
