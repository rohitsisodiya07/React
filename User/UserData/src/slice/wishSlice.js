import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "userWishlist",

  initialState: {
    wishlist: [],
  },

  reducers: {
    addWishlist: (state, action) => {
      state.wishlist.push(...action.payload);
    },

    removeWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.uniqueId !== action.payload,
      );
    },

    removeUserWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.userName !== action.payload,
      );
    },
  },
});

export const { addWishlist, removeWishlist, removeUserWishlist } = wishSlice.actions;

export default wishSlice.reducer;
