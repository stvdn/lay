import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    updateProductQuantity: (state, action) => {
      state.products[action.payload.index].quantity += action.payload.change;
      console.log(action);
      console.log(state.products[action.payload.index]);
    },
  },
});

export const { addToCart, updateProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;