import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",

  initialState: {
    user: [],
    products: [],
  },

  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },

    addApi: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addUser, addApi } = signupSlice.actions;

export default signupSlice.reducer;