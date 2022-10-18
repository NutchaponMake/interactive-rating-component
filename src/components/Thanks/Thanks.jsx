import classes from "./thanks.module.css";
import ThanksImg from "../../assets/illustration-thank-you.svg";
export const Thanks = (props) => {
  const { score, maxScore } = props;
  return (
    <div>
      <div className={classes["image-container"]}>
        <img src={ThanksImg} alt="Thanks Image" />
      </div>
      <div className={classes["thanks-container"]}>
        <p>
          You selected {props.score || 0} out of {props.maxScore || 5}
        </p>
      </div>
    </div>
  );
};
