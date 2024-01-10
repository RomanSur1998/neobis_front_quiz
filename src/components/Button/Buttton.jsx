import React, { useState } from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router";
import {
  setIndexBarCount,
  setSelectAnswer,
} from "../../redux/slices/QuizesSlice";
import { useDispatch } from "react-redux";

const Buttton = ({
  text,
  isAnswers,
  navigateName,
  isWrong,
  isRight,
  isValue,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className={isAnswers ? styles.button : styles.buttonAnswer}
        value={isValue}
        onClick={(e) => {
          navigateName && navigate(navigateName);
          !navigateName && isValue
            ? dispatch(setSelectAnswer(e.target.value))
            : null;
          !navigateName && !isValue && dispatch
            ? dispatch(setIndexBarCount(1))
            : null;
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttton;
