import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "../features/signIn/signInSlice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
  devTools: true,
});
