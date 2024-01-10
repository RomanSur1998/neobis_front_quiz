import React from "react";
import arrow from "../../assets/icons/arrow_right.svg";
import styles from "./NavigationPanel.module.css";
import { useNavigate } from "react-router";

const NavigationPanel = ({ navigateBlockName, navigateLink }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.navigationContainer}>
      <span className={styles.navigateName}>
        {navigateBlockName ?? "Квизы"}
      </span>
      <img
        src={arrow}
        alt="navigate arrow"
        onClick={() => {
          navigate(navigateLink);
        }}
        className={styles.navigationArrow}
      />
    </div>
  );
};

export default NavigationPanel;
