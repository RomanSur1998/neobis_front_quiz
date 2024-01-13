import { getPercentBar } from "./getPercentBar";

export const getResults = (countRightAnswers, questions) => {
  const results = { text: "", color: "" };
  const newRess = getPercentBar(questions.length, countRightAnswers);
  if (newRess >= 80) {
    return { ...results, text: "Поздравляем!", color: "#4aa829" };
  } else if (newRess <= 80 && newRess >= 50) {
    return { ...results, text: "Удовлетворительно", color: "#FFC542" };
  } else {
    return { ...results, text: "Сожалеем", color: "#E03336" };
  }
};
