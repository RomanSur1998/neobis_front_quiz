import React, { useEffect, useState } from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router";
import {
  setIndexBarCount,
  setIsTouched,
  setRightAnswers,
  setSelectAnswer,
  setcountRightAnswers,
} from "../../redux/slices/QuizesSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAnswer } from "../../functions/getAnswer";

const Buttton = ({ text, isAnswers, navigateName, rightAnswers, isValue }) => {
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isTouched, countRightAnswers, indexBarCount } = useSelector(
    (state) => state.quizes
  );

  useEffect(() => {
    setColor("");
  }, [indexBarCount]);
  console.log(countRightAnswers, "count right");

  const handleClick = (e) => {
    dispatch(setSelectAnswer(isValue));
    if (navigateName) {
      navigate(navigateName);
    } else if (isValue && !isTouched) {
      dispatch(setIsTouched(true));
      setColor(rightAnswers === isValue ? "#B9FFA0" : "#EF6E6E");
      dispatch(rightAnswers === isValue ? setcountRightAnswers() : null);
    } else if (!isValue && dispatch) {
      dispatch(setIndexBarCount());
      dispatch(setRightAnswers(rightAnswers));
      dispatch(setIsTouched(false));
    }
  };

  return (
    <div>
      <button
        className={isAnswers ? styles.button : styles.buttonAnswer}
        value={isValue}
        onClick={handleClick}
        style={{ background: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttton;
