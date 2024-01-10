import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttton from "../../components/Button/Buttton";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import styles from "./AnswersPage.module.css";
import { getPercentBar } from "../../functions/getPercentBar";
import { useDispatch, useSelector } from "react-redux";

const AnswersPage = () => {
  const { indexBarCount, rightAnswers, selectedAnswer } = useSelector(
    (state) => state.quizes
  );
  const dispatch = useDispatch();
  console.log(indexBarCount, "121212");
  console.log(selectedAnswer, "select answer");
  return (
    <MainLayout>
      <SearchBar navigateLink={"/quizsPreview"} isShowSearch={false} />
      <div className={styles.container}>
        <Progress
          percent={getPercentBar(3, indexBarCount)}
          status="success"
          className={styles.statusBar}
        />
        <h3 className={styles.tittle}>
          Вопрос 4. Какое событие считается началом Французской революции?
        </h3>
        <div className={styles.answerBlock}>
          <Buttton text={"Вопрос 1"} isValue={"Вопрос 1"} />
          <Buttton text={"Вопрос 2"} isValue={"Вопрос 2"} />
          <Buttton text={"Вопрос 3"} isValue={"Вопрос 3"} />
          <Buttton text={"Вопрос 4"} isValue={"Вопрос 4"} />

          <Buttton
            text={
              getPercentBar(5, indexBarCount) === 100
                ? "Закончить квиз"
                : "Следующий вопрос"
            }
            isAnswers={true}
            navigateName={
              getPercentBar(5, indexBarCount) === 100 ? "/finish" : null
            }
            dispatch={dispatch}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AnswersPage;
