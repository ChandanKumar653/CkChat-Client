import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  signup: {
    data: [],
    status: "idle",
    error: null,
  },
  login: {
    data: [],
    status: "idle",
    error: null,
  },
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(registerUser.pending, (state) => {
        state.signup.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.signup.status = "success";
        state.signup.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.signup.status = "error";
        state.signup.error = action.error.message;
      });
  },
});

// export const getProducts = createAsyncThunk("products/get", async () => {
//   try {
//     const response = await fetch("https://api.escuelajs.co/api/v1/product");
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });
export const registerUser = createAsyncThunk("signup/post", async (body) => {
  try {
    // const res = await axios.post("http://localhost:3001/register-user", body);
    const res = await axios.post(
      "https://ckchat-server.onrender.com/register-user",
      body
    );
    if (res.status !== 200) {
      throw new Error(res.data.body);
    } else {
      return res.data["body"];
    }
  } catch (e) {
    throw e;
  }
});
export default AuthSlice.reducer;
