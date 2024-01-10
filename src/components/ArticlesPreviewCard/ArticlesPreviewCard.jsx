import React from "react";
import example from "../../assets/pictures/arist.svg";
import styles from "./ArticlesPreviewCard.module.css";
import { articleImage } from "../../helpers/getArcticleImage";
import { useNavigate } from "react-router";

const ArticlesPreviewCard = () => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate("/reading/:id");
      }}
    >
      <div className={styles.textBlock}>
        <h3>
          Философия <br /> Аристотеля
        </h3>
        <div>
          <span>#Философия</span>:<span>15 минут </span>
        </div>
      </div>
      <div>
        {/* <img src={example} alt="" /> */}
        <img src={articleImage["Философия"]} alt="" />
      </div>
    </div>
  );
};

export default ArticlesPreviewCard;
