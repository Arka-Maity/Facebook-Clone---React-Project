import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
    },
    
    reducers:{
        getProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { getProduct } = productSlice.actions;

export default productSlice.reducer;