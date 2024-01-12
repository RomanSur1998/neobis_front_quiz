import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions, fethcQuizes } from "../actions/QuizAction";

const initialState = {
  quizes: [],
  statusBarPercent: null,
  rightAnswers: "",
  selectedAnswer: "",
  indexBarCount: 1,
  countRightAnswers: 0,
  isTrue: false,
  isTouched: false,
  isLoading: false,
  questions: [],
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
    setIsTouched(state, action) {
      state.isTouched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fethcQuizes.fulfilled, (state, action) => {
      state.quizes = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(fethcQuizes.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.rightAnswers = action.payload[0].answerTrue;
      state.isLoading = false;
    });
    builder.addCase(fetchQuestions.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const {
  setIndexBarCount,
  setSelectAnswer,
  setIsTrue,
  setcountRightAnswers,
  setIndexNull,
  setRightAnswers,
  setIsTouched,
} = quizesSlice.actions;
export default quizesSlice.reducer;
