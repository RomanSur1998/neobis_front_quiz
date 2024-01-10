import { configureStore } from "@reduxjs/toolkit";
import ArticlesSlice from "./slices/ArticlesSlice";
import QuizesSlice from "./slices/QuizesSlice";

export const store = configureStore({
  reducer: {
    articles: ArticlesSlice,
    quizes: QuizesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
