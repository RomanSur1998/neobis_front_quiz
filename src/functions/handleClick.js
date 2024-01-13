import {
  setIndexBarCount,
  setRightAnswers,
  setcountRightAnswers,
  setSelectAnswer,
  setIsTouched,
} from "../redux/slices/QuizesSlice";

export const handleClick = (
  isValue,
  navigateName,
  rightAnswers,
  dispatch,
  navigate,
  isTouched,
  setColor
) => {
  dispatch(setSelectAnswer(isValue));
  if (navigateName) {
    navigate(navigateName);
  } else if (isValue && !isTouched) {
    dispatch(setIsTouched(true));
    setColor(rightAnswers === isValue ? "#B9FFA0" : "#EF6E6E");
    dispatch(rightAnswers === isValue ? setcountRightAnswers() : null);
  } else if (!isValue && dispatch) {
    dispatch(setIndexBarCount());
    dispatch(setRightAnswers(rightAnswers));
    dispatch(setIsTouched(false));
  }
};
