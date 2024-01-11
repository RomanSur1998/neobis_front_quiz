import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizes: [],
  statusBarPercent: null,
  rightAnswers: "Вопрос 4",
  selectedAnswer: "",
  indexBarCount: 1,
  countRightAnswers: 0,
  isTrue: false,
};

export const quizesSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    setIndexBarCount(state, action) {
      state.indexBarCount = state.indexBarCount += 1;
    },
    setSelectAnswer(state, action) {
      state.selectedAnswer = action.payload;
    },
    setIsTrue(state, action) {
      state.isTrue = true;
    },
    setcountRightAnswers(state, action) {
      state.countRightAnswers = state.countRightAnswers += 1;
    },
    setIndexNull(state, action) {
      state.indexBarCount = action.payload;
    },
    setRightAnswers(state, action) {
      state.rightAnswers = action.payload;
    },
  },
});

export const {
  setIndexBarCount,
  setSelectAnswer,
  setIsTrue,
  setcountRightAnswers,
  setIndexNull,
  setRightAnswers,
} = quizesSlice.actions;
export default quizesSlice.reducer;
