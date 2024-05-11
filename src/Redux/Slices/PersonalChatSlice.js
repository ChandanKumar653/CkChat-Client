import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: {
    data:null,
    status: "idle",
    error: null,
  },
};
export const PersonalChatSlice = createSlice({
  name: "personalChat",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserChat.pending, (state) => {
        state.userInfo.status = "loading";
      })
      .addCase(getUserChat.fulfilled, (state, action) => {
        state.userInfo.status = "succeeded";
        state.userInfo.data = action.payload;
      })
      .addCase(getUserChat.rejected, (state, action) => {
        state.userInfo.status = "error";
        state.userInfo.error = action.error.message;
      });
  },
});

export const getUserChat = createAsyncThunk("getUserChat/get", async () => {
  try {
    const response = await axios.get("https://api.escuelajs.co/api/v1/product");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    // const data = await response.json();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const { addUser} = PersonalChatSlice.actions;
export default PersonalChatSlice.reducer;