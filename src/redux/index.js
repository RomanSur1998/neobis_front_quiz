import { configureStore } from "@reduxjs/toolkit";
import ArticlesSlice from "./slices/ArticlesSlice";

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
