import { configureStore } from "@reduxjs/toolkit";
import  themeSlice  from "../slices/authSlices";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});