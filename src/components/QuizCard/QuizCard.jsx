import React from "react";
import example from "../../assets/pictures/guiz_card_example.svg";
import styles from "./QuizCard.module.css";
import { useNavigate } from "react-router";

const QuizCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => {
        navigate("/quizsPreview");
      }}
    >
      <div className={styles.cardContent}>
        <img src={item.imageUrl} alt="card icon" className={styles.image} />
        <h3 className={styles.title}>{item.name}</h3>
        <span>10 вопросов</span>
      </div>
    </div>
  );
};

export default QuizCard;
