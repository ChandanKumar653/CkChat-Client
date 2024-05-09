import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLink } from "../../Constants";
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
  verify: {
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
//registerUser
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
      })

//verifyUser
      .addCase(verifyUser.pending, (state) => {
        state.verify.status = "loading";
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.verify.status = "success";
        state.verify.data = action.payload;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.verify.status = "error";
        state.verify.error = action.error.message;
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
    const res = await axios.post(`${apiLink}/register-user`, body);
    // const res = await axios.post(
    //   "https://ckchat-server.onrender.com/register-user",
    //   body
    // );
    if (res.status !== 200) {
      throw new Error(res.data.body);
    } else {
      return res.data["body"];
    }
  } catch (e) {
    throw e;
  }
});
export const verifyUser = createAsyncThunk("verify/post", async (body) => {
  try {
    const res = await axios.post(`${apiLink}/verify-user`, body);
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
