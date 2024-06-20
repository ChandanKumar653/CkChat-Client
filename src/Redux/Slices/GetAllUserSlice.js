import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLink } from "../../Constants";
const initialState = {
  userData: {
    data: null,
    status: "idle",
    error: null,
  },
 
};
export const GetAllUserSlice = createSlice({
  name: "getAllUser",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.userData.status = "loading";
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.userData.status = "success";
        state.userData.data = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.userData.status = "error";
       state.userData.error = action.payload || action.error.message;
      });
  },
});



export const getAllUsers = createAsyncThunk(
  "getAllUsers/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${apiLink}/all-users`);
      if (res.status !== 200) {
        throw new Error("Failed to fetch users");
      }
      return res.data.body;
    } catch (e) {
      if (!e.response) {
        // network error
        return rejectWithValue("Network error, please try again later");
      } else if (e.response && e.response.data && e.response.data.body) {
        return rejectWithValue(e.response.data.body); // Pass server-side error message
      } else {
        return rejectWithValue("Failed to get users"); // Fallback generic error message
      }
    }
  }
);

export default GetAllUserSlice.reducer;
