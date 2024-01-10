import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (data) => {
    try {
      const response = await api.getAllArctiles(data);
      console.log(response, "get all articles");
      return response;
    } catch (error) {
      console.log(error, "error get articles");
    }
  }
);
