import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttton from "../../components/Button/Buttton";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import styles from "./AnswersPage.module.css";
import { getPercentBar } from "../../functions/getPercentBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/actions/QuizAction";
import { LinearProgress } from "@mui/material";

const AnswersPage = () => {
  const { indexBarCount, isLoading, rightAnswers, questions } = useSelector(
    (state) => state.quizes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions('Quiz "Philosophy"'));
  }, []);

  console.log(rightAnswers, "rightAnswers");

  return (
    <MainLayout>
      <SearchBar navigateLink={"/quizsPreview"} isShowSearch={false} />
      <div className={styles.container}>
        <Progress
          percent={getPercentBar(questions.length, indexBarCount)}
          status="success"
          className={styles.statusBar}
        />
        <h3 className={styles.tittle}>
          Вопрос {indexBarCount ?? indexBarCount}.{" "}
          {questions[indexBarCount - 1]?.name}
        </h3>
        <div className={styles.answerBlock}>
          {isLoading ? (
            <LinearProgress />
          ) : (
            <>
              <Buttton
                text={questions[indexBarCount - 1]?.answerTrue}
                isValue={questions[indexBarCount - 1]?.answerTrue}
                rightAnswers={questions[indexBarCount - 1]?.answerTrue}
                selectedAnswer={questions[indexBarCount - 1]?.answerTrue}
                right={questions[indexBarCount - 1]?.answerTrue}
              />
              <Buttton
                text={questions[indexBarCount - 1]?.firstAnswerFalse}
                isValue={questions[indexBarCount - 1]?.firstAnswerFalse}
                selectedAnswer={questions[indexBarCount - 1]?.firstAnswerFalse}
              />
              <Buttton
                text={questions[indexBarCount - 1]?.secondAnswerFalse}
                isValue={questions[indexBarCount - 1]?.secondAnswerFalse}
                selectedAnswer={questions[indexBarCount - 1]?.secondAnswerFalse}
              />
              <Buttton
                text={questions[indexBarCount - 1]?.thirdAnswerFalse}
                isValue={questions[indexBarCount - 1]?.thirdAnswerFalse}
                selectedAnswer={questions[indexBarCount - 1]?.thirdAnswerFalse}
              />
              <Buttton
                text={
                  getPercentBar(questions.length, indexBarCount) === 100
                    ? "Закончить квиз"
                    : "Следующий вопрос"
                }
                isAnswers={true}
                navigateName={
                  getPercentBar(questions.length, indexBarCount) === 100
                    ? "/finish"
                    : null
                }
                dispatch={dispatch}
              />
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default AnswersPage;
