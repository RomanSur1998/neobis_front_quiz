import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ page, elemenNumber }) => {
    try {
      const response = await api.getAllArctiles(page, elemenNumber);

      console.log(response, "get all articles");
      return response.data;
    } catch (error) {
      console.log(error, "error get articles");
    }
  }
);
export const fetchTextArticles = createAsyncThunk(
  "articles/fetchTextArticles",
  async (name) => {
    try {
      const response = await api.getText(name);

      console.log(response, "get all articles");
      return response.data;
    } catch (error) {
      console.log(error, "error get articles");
    }
  }
);
export const fetchFilterArticles = createAsyncThunk(
  "articles/fetchFilterArticles",
  async ({ searchParam, filterParam }) => {
    try {
      const response = await api.getFilterArticles(searchParam, filterParam);
      console.log(response, "get filter and search articles");
      return response.data;
    } catch (error) {
      console.log(error, "error filter and search articles");
    }
  }
);
