import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { fetchArticles, fetchTextArticles } from "../actions/ArticlesAction";

const initialState = {
  articles: [],
  page: 1,
  query: "",
  filter: null,
  isShowsFilter: false,
  articlesText: "",
  isLoadind: false,
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
    builder.addCase(fetchTextArticles.fulfilled, (state, action) => {
      state.articlesText = action.payload;
      state.isLoadind = false;
    });
    builder.addCase(fetchTextArticles.pending, (state, action) => {
      state.isLoadind = true;
    });
  },
});

export const { setPage, setQuery, setFilter, setShowFilter } =
  articlesSlice.actions;
export default articlesSlice.reducer;
