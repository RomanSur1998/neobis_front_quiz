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
  const { indexBarCount, selectedAnswer } = useSelector(
    (state) => state.quizes
  );
  const dispatch = useDispatch();
  console.log(indexBarCount, "121212");
  console.log(selectedAnswer, "select answer");

  const buttons = [
    [
      {
        text: "Вопрос 1",
        isValue: "Вопрос 1",
        rightAnswers: "Вопрос 1",
        selectedAnswer: "Вопрос 1",
      },
      {
        text: "Вопрос 2",
        isValue: "Вопрос 2",
        rightAnswers: "Вопрос 2",
        selectedAnswer: "Вопрос 2",
      },
      {
        text: "Вопрос 3",
        isValue: "Вопрос 3",
        rightAnswers: "Вопрос 3",
        selectedAnswer: "Вопрос 3",
      },
      {
        text: "Вопрос 4",
        isValue: "Вопрос 4",
        rightAnswers: "Вопрос 4",
        selectedAnswer: "Вопрос 4",
      },
    ],
    [
      {
        text: "Вопрос 5",
        isValue: "Вопрос 5",
        rightAnswers: "Вопрос 5",
        selectedAnswer: "Вопрос 5",
      },
      {
        text: "Вопрос 6",
        isValue: "Вопрос 6",
        rightAnswers: "Вопрос 6",
        selectedAnswer: "Вопрос 6",
      },
      {
        text: "Вопрос 7",
        isValue: "Вопрос 7",
        rightAnswers: "Вопрос 7",
        selectedAnswer: "Вопрос 7",
      },
      {
        text: "Вопрос 8",
        isValue: "Вопрос 8",
        rightAnswers: "Вопрос 8",
        selectedAnswer: "Вопрос 8",
      },
    ],
  ];

  return (
    <MainLayout>
      <SearchBar navigateLink={"/quizsPreview"} isShowSearch={false} />
      <div className={styles.container}>
        <Progress
          percent={getPercentBar(buttons.length, indexBarCount)}
          status="success"
          className={styles.statusBar}
        />
        <h3 className={styles.tittle}>
          Вопрос {indexBarCount ?? indexBarCount}. Какое событие считается
          началом Французской революции?
        </h3>
        <div className={styles.answerBlock}>
          {buttons[indexBarCount - 1].map((elem) => {
            return (
              <Buttton
                text={elem.text}
                isValue={elem.isValue}
                rightAnswers={elem.rightAnswers}
                selectedAnswer={elem.selectedAnswer}
              />
            );
          })}
          <Buttton
            text={
              getPercentBar(buttons.length, indexBarCount) === 100
                ? "Закончить квиз"
                : "Следующий вопрос"
            }
            isAnswers={true}
            navigateName={
              getPercentBar(buttons.length, indexBarCount) === 100
                ? "/finish"
                : null
            }
            dispatch={dispatch}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AnswersPage;
