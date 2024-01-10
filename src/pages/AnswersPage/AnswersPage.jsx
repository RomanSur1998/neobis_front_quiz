import React from "react";
import MainLayout from "../../layouts/MainLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import Buttton from "../../components/Button/Buttton";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import styles from "./AnswersPage.module.css";
import { useNavigate } from "react-router";

const AnswersPage = () => {
  return (
    <MainLayout>
      <SearchBar navigateLink={"/quizsPreview"} isShowSearch={false} />
      <div className={styles.container}>
        <Progress percent={67} status="success" className={styles.statusBar} />
        <h3 className={styles.tittle}>
          Вопрос 4. Какое событие считается началом Французской революции?
        </h3>
        <div className={styles.answerBlock}>
          {/* Map bloc */}
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          <Buttton text={"Вопрос 1"} />
          {/* Map bloc */}
          <Buttton
            text={"Следующи вопрос"}
            isAnswers={true}
            navigate={"/answers"}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default AnswersPage;
