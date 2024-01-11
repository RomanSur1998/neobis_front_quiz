import { setIsTrue } from "../redux/slices/QuizesSlice";

export function getAnswer(rightAnswers, selectedAnswer, setIsTrue) {
  if (selectedAnswer === rightAnswers) {
    setIsTrue(true);
  }
  // setIsTrue(false);
}
