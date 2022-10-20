import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import classes from "./choice.module.css";

export const Choice = forwardRef((props, ref) => {
  // const selectedScore = useRef(null);
  // const scoreSelectedHandler = () => {
  //   props.onScoreSelected(selectedScore.current.value);
  // };

  return (
    <div className={classes.scoreRadio}>
      <input
        type="radio"
        id={`score-${props.score}`}
        name="score-group"
        value={props.score}
        ref={ref}
      />
      <label htmlFor={`score-${props.score}`}>{props.score}</label>
    </div>
  );
});
