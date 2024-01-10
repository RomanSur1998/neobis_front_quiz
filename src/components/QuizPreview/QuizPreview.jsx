import React from "react";
import Buttton from "../Button/Buttton";
import history_logo from "../../assets/pictures/history_logo.svg";
import styles from "./QuizPreview.module.css";
import { useNavigate } from "react-router";

const QuizPreview = ({ colorNum }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={history_logo} alt="" />
        <h2 className={styles.title}>История</h2>
        <span className={styles.questionNum}>10 вопросов</span>
      </div>
      <Buttton
        text={"Начать квиз"}
        isAnswers={true}
        navigateName={"/quizsPreview"}
      />
    </div>
  );
};

export default QuizPreview;
