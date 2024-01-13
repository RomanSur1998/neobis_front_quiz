import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../../functions/handleClick";
import styles from "./Button.module.css";

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

  return (
    <div>
      <button
        className={isAnswers ? styles.button : styles.buttonAnswer}
        value={isValue}
        onClick={() =>
          handleClick(
            isValue,
            navigateName,
            rightAnswers,
            dispatch,
            navigate,
            isTouched,
            setColor
          )
        }
        style={{ background: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default React.memo(Buttton);
