import React from "react";
import example from "../../assets/pictures/articles_card_example.png";
import styles from "./ArticlesCard.module.css";
import { useNavigate } from "react-router";
import { getColor } from "../../helpers/getColor";

const ArticlesCard = ({ item }) => {
  const navigation = useNavigate();
  return (
    <div
      style={{
        background: getColor[item.colorId],
      }}
      className={styles.articleCardContainer}
      onClick={() => {
        navigation(`/reading/${item.name}`);
      }}
    >
      <div>
        <h3>{item.name}</h3>
      </div>
      <div className={styles.pictiresBlock}>
        <div>
          <span>#{item.genre}</span>
        </div>
        <div>
          <img src={item.imageUrl} alt="image" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ArticlesCard);
