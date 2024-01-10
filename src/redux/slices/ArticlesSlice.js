import { createSlice } from "@reduxjs/toolkit";

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
      console.log(action.payload, 'action filter');
      state.filter = action.payload;
    },
    setShowFilter(state, action) {
      state.isShowsFilter = action.payload;
    },
  },
});

export const { setPage, setQuery, setFilter, setShowFilter } =
  articlesSlice.actions;
export default articlesSlice.reducer;
