import { useRef } from "react";
import { useState } from "react";
import classes from "./choice.module.css";

export const Choice = (props) => {
  const selectedScore = useRef(null);

  const scoreSelectedHandler = () => {
    console.log(selectedScore.current.value);
    props.onScoreSelected(selectedScore.current.value);
  };
  return (
    <div className={classes.scoreRadio}>
      <input
        type="radio"
        id={`score-${props.score}`}
        name="score-group"
        value={props.score}
        onChange={scoreSelectedHandler}
        ref={selectedScore}
      />
      <label htmlFor={`score-${props.score}`}>{props.score}</label>
    </div>
  );
};
