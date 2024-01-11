import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
  statusBarPercent: null,
  rightAnswers: "Вопрос 1",
  selectedAnswer: "",
  indexBarCount: 1,
  countRightAnswers: 0,
};

export const quizesSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    setIndexBarCount(state, action) {
      state.indexBarCount = action.payload;
    },
    setSelectAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { setIndexBarCount, setSelectAnswer } = quizesSlice.actions;
export default quizesSlice.reducer;
