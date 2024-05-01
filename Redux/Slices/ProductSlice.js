import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productData =  createAsyncThunk("productData",async () => {
   const res = await fetch('https://fakestoreapi.com/products')
    const result = await res.json();
    return result
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) =>{
        builder.addCase(productData.pending,(state, action) => {
            state.isLoading = true;
        })
        builder.addCase(productData.fulfilled,(state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(productData.rejected,(state,action) => {
            state.isError = true;
        })
    }
})

export default productSlice.reducer;
