import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    signIn: false,
    userId: "",
    userData: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.signIn = action.payload.signIn;
      state.userId = action.payload.userId;
      state.userData = action.payload.userData;
    },
  },
});

export const { signIn } = signInSlice.actions;

export default signInSlice.reducer;
