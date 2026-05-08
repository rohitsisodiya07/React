import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "userCart",

  initialState: {
    cart: [],
  },

  reducers: {
    addCart: (state, action) => {
      state.cart.push(...action.payload);
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.uniqueId !== action.payload
      );
    },

    removeUserCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.userName !== action.payload
      );
    },
  },
});

export const {
  addCart,
  removeCart,
  removeUserCart,
} = cartSlice.actions;

export default cartSlice.reducer;