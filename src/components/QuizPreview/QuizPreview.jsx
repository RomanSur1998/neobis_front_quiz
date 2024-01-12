import React from "react";
import Buttton from "../Button/Buttton";
import history_logo from "../../assets/pictures/history_logo.svg";
import styles from "./QuizPreview.module.css";
import { getColor } from "../../helpers/getColor";

const QuizPreview = ({ imageUrl, name, colorId }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          background: getColor[colorId],
          boxShadow: `0px -2px 8px 8px ${getColor[colorId]}`,
        }}
      >
        <div>
          <img src={imageUrl} alt="" className={styles.image} />
        </div>
        <h2 className={styles.title}>{name}</h2>
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
