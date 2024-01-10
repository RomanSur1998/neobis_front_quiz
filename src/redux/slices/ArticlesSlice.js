import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { fetchArticles } from "../actions/ArticlesAction";

const initialState = {
  articles: [],
  page: 1,
  query: "",
  filter: null,
  isShowsFilter: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
    setFilter(state, action) {
      console.log(action.payload, "action filter");
      state.filter = action.payload;
    },
    setShowFilter(state, action) {
      state.isShowsFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  },
});

export const { setPage, setQuery, setFilter, setShowFilter } =
  articlesSlice.actions;
export default articlesSlice.reducer;
