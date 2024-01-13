import { getPercentBar } from "./getPercentBar";

export const getResults = (countRightAnswers, questions) => {
  const results = { text: "", color: "" };
  const newRess = getPercentBar(questions.length, countRightAnswers);
  if (newRess >= 80) {
    return {text:"Поздравляем!", color:"green"}= results
  }
  else if(newRess<=80){
    return {text:"Удовлетворительно", color:"green"}= results
  }
};
