import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    user: [],
  },

  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

export const { addUser } = signupSlice.actions;
export default signupSlice.reducer;