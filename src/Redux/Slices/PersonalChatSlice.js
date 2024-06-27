import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLink } from "../../Constants";

const initialState = {
  userInfo: {
    data: null,
    status: "idle",
    error: null,
  },
  userChatData: {
    data: null,
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
    // makeTrueOrFalse:(state,action)=>{
    //   state.userChatData.status=action.payload;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserChat.pending, (state) => {
        state.userChatData.status = "loading";
      })
      .addCase(getUserChat.fulfilled, (state, action) => {
        state.userChatData.status = "success";
        state.userChatData.data = action.payload;
      })
      .addCase(getUserChat.rejected, (state, action) => {
        state.userChatData.status = "error";
        state.userChatData.error = action.payload || action.error.message;
      });
  },
});

export const getUserChat = createAsyncThunk(
  "getUserChat/get",
  async ({ user_id, receiver_id }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${apiLink}/messages/${user_id}/${receiver_id}`);
    // console.log("response",response);
    if (response.status !== 200) {
      throw new Error("Failed to fetch messages");
    }
    // const data = await response.json();
    return response.data.body;
  } catch (e) {
    // console.log("under chatch",e);
    if (!e.response) {
      // network error
      return rejectWithValue("Network error, please try again later");
    } else if (e.response && e.response.data && e.response.data.body) {
      return rejectWithValue(e.response.data.body); // Pass server-side error message
    } else {
      return rejectWithValue("Failed to register user"); // Fallback generic error message
    }
  }
});

export const { addUser, makeTrueOrFalse } = PersonalChatSlice.actions;
export default PersonalChatSlice.reducer;