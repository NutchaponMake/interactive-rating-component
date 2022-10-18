import classes from "./thanks.module.css";
import ThanksImg from "../../assets/illustration-thank-you.svg";
import { useState } from "react";

export const Thanks = (props) => {
  const [imageState, setImageState] = useState(false);

  const imageLoadHandler = () => {
    setImageState(true);
  };

  const { score, maxScore } = props;
  return (
    <div>
      {!imageState && <div className={classes.imageSkeleton}></div>}
      <img src={ThanksImg} alt="Thanks Image" onLoad={imageLoadHandler} />

      <div className={classes["thanks-container"]}>
        <p>
          You selected {props.score || 0} out of {props.maxScore || 5}
        </p>
      </div>
    </div>
  );
};
