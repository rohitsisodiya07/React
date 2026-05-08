import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",

  initialState: {
    user: [],
    currentUser: null,
  },

  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },

    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },

    logoutUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { addUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
