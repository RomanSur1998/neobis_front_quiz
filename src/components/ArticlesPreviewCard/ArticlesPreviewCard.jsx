import React from "react";
import example from "../../assets/pictures/arist.svg";
import styles from "./ArticlesPreviewCard.module.css";
import { articleImage } from "../../helpers/getArcticleImage";
import { useNavigate } from "react-router";
import { getColor } from "../../helpers/getColor";

const ArticlesPreviewCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: getColor[item.colorId],
      }}
      className={styles.container}
      onClick={() => {
        navigate(`/reading/${item.name}`);
      }}
    >
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{item.name}</h3>
        <div>
          <span>#{item.genre}</span>:<span>15 минут </span>
        </div>
      </div>
      <div>
        <img src={item.imageUrl} alt="card image" className={styles.image} />
      </div>
    </div>
  );
};

export default ArticlesPreviewCard;
