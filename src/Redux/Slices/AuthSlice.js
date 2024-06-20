import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiLink } from "../../Constants";
import { jwtDecode } from "jwt-decode";
const initialState = {
  signup: {
    data: [],
    status: "idle",
    error: null,
  },
  login: {
    data: null,
    status: "idle",
    error: null,
  },
  verify: {
    data: [],
    status: "idle",
    error: null,
  },
  local:{
    isAuthenticated:false,
    token:null,
    decoded:null,
}
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.local = action.payload;
    },
    setLoginStatus:(state)=>{
      state.login.status="idle";
    }
   },
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
        state.signup.error = action.payload || action.error.message;
      })
//login
      .addCase(login.pending, (state) => {
        state.login.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.login.status = "success";
        state.login.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.login.status = "error";
        state.login.error = action.payload || action.error.message;
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
        state.verify.error = action.payload || action.error.message;
      })

    
  },
});

export const registerUser = createAsyncThunk(
  "signup/post",
  async (body, { rejectWithValue }) => {
    try {
      var res = await axios.post(`${apiLink}/register-user`, body);
      // console.log("res from test", res);
      // if (res.status !== 200) {
      //   return rejectWithValue(res?.data?.body);
      // }
      return res.data.body;
    } catch (e) {
      if (!e.response) {
        // network error
        return rejectWithValue("Network error, please try again later");
      } else if (e.response && e.response.data && e.response.data.body) {
        return rejectWithValue(e.response.data.body); // Pass server-side error message
      } else {
        return rejectWithValue("Failed to register user"); // Fallback generic error message
      }
    }
  }
);

export const login = createAsyncThunk(
  "login/post",
  async (body, { rejectWithValue }) => {
    try {
      var res = await axios.post(`${apiLink}/login`, body);
      // console.log("res from test", res);
      // if (res.status !== 200) {
      //   return rejectWithValue(res?.data?.body);
      // }
      return res.data.token;
    } catch (e) {
      if (!e.response) {
        // network error
        return rejectWithValue("Network error, please try again later");
      } else if (e.response && e.response.data && e.response.data.body) {
        return rejectWithValue(e.response.data.body); // Pass server-side error message
      } else {
        return rejectWithValue("Failed to login user:"+e); // Fallback generic error message
      }
    }
  }
);

export const verifyUser = createAsyncThunk(
  "verify/post",
  async (body, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${apiLink}/verify-user`, body);
      // if (res.status !== 200) {
      //   throw new Error("Failed to verify user");
      // }
      return res.data.body;
    } catch (e) {
      if (!e.response) {
        // network error
        return rejectWithValue("Network error, please try again later");
      } else if (e.response && e.response.data && e.response.data.body) {
        return rejectWithValue(e.response.data.body); // Pass server-side error message
      } else {
        return rejectWithValue("Failed to verify user"); // Fallback generic error message
      }
    }
  }
);

export const { setAuthState,setLoginStatus } = AuthSlice.actions;

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem("loginToken");
  // console.log("checkAuth Auto token:",token)
  const temp = {
    isAuthenticated: false,
    token: null,
    decoded: null,
  };

  if (!token) {
    dispatch(setAuthState(temp));
    return;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("loginToken");
      dispatch(setAuthState(temp));
    } else {
      const authenticatedState = {
        isAuthenticated: true,
        token,
        decoded: decodedToken,
      };
      dispatch(setAuthState(authenticatedState));
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("loginToken");
    dispatch(setAuthState(temp));
  }
};

export default AuthSlice.reducer;
