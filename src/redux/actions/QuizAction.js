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
