import React from "react";
import example from "../../assets/pictures/articles_card_example.png";
import styles from "./ArticlesCard.module.css";
import { useNavigate } from "react-router";

const ArticlesCard = () => {
  const navigation = useNavigate();
  return (
    <div
      className={styles.articleCardContainer}
      style={{}}
      onClick={() => {
        navigation("/reading/:id");
      }}
    >
      <div>
        <h3>Жизнь и правление Наполеона Бонапарта </h3>
      </div>
      <div className={styles.pictiresBlock}>
        <div>
          <span>#История</span>
        </div>
        <div>
          <img src={example} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
