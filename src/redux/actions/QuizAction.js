import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const fethcQuizes = createAsyncThunk(
  "quizes/fethcQuizes",
  async (data) => {
    try {
      const response = await api.getAllQuizes(data);
      console.log(response, "get all quizes");
      return response;
    } catch (error) {
      console.log(error, "error get quizes ");
    }
  }
);
export const fetchQuestions = createAsyncThunk(
  "quizes/fetchQuestions",
  async (data) => {
    try {
      const response = await api.getQuestions(data);
      console.log(response, "get question");
      return response.data;
    } catch (error) {
      console.log(error, "error get quizes ");
    }
  }
);
