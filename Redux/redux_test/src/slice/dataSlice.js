import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dummy",

  initialState: {
    products: [],
  },
  reducers: {
    addApi: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addApi } = dataSlice.actions;

export default dataSlice.reducer;
