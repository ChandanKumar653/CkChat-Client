import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: {
    data: [],
    status: "idle",
    error: null,
  },
  news: {
    data: [],
    status: "idle",
    error: null,
  },
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.products.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products.status = "succeeded";
        state.products.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.products.status = "error";
        state.products.error = action.error.message;
      })

      
      .addCase(getNews.pending, (state) => {
        state.news.status = "loading";
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news.status = "succeeded";
        state.news.data = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.news.status = "error";
        state.news.error = action.error.message;
      });
  },
});

export const getProducts = createAsyncThunk("products/get", async () => {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/product");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
export const  getNews=createAsyncThunk('news/post',async(body)=>{
    try{
       
        const res =await axios.post(
          "https://10zuv29h73.execute-api.ap-south-1.amazonaws.com/prod/getNewsByTag",
          body
        );
        if(res.data['body-json']['statusCode']!==200){
             throw new Error("Failed to fetch news");
        }
else{
    return res.data['body-json']['body']['Items'];
}
    }catch(e){
        throw e;
    }
})
export default productSlice.reducer;
