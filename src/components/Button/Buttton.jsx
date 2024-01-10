import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router";

const Buttton = ({ text, isAnswers, navigateName, isWrong, isRight }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        {
          navigateName ? navigate(navigateName) : null;
        }
      }}
    >
      <button className={isAnswers ? styles.button : styles.buttonAnswer}>
        {text}
      </button>
    </div>
  );
};

export default Buttton;
