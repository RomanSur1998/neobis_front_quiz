import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Buttton from "../../components/Button/Buttton";
import fon_right from "../../assets/pictures/fon_right.svg";
import styles from "./FinishQuizPage.module.css";
import { useSelector } from "react-redux";
import { getAnswer } from "../../functions/getAnswer";
import { getPercentBar } from "../../functions/getPercentBar";

const FinishQuizPage = () => {
  const { countRightAnswers, questions } = useSelector((state) => state.quizes);

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.titleBlock}>
          <img src={fon_right} alt="" />
          <h2 className={styles.title}>Поздравляем!</h2>
          <img src={fon_right} alt="" />
        </div>

        <div className={styles.block}>
          <h3>Вы ответили правильно на </h3>
          <span>
            {countRightAnswers ?? countRightAnswers} вопросов из{" "}
            {questions ? questions.length : 10}
          </span>
        </div>
        <p className={styles.description}>
          У вас всегда есть возможность пройти квиз заново, чтобы еще раз
          проверить свои знания!
        </p>

        <Buttton text={"Вернуться "} isAnswers={true} navigateName={"/"} />
      </div>
    </MainLayout>
  );
};

export default FinishQuizPage;
