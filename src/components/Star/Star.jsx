import classes from "./star.module.css";
import starIcon from "../../assets/icon-star.svg";

export const Star = (props) => {
  return (
    <div className={classes["star-row"]}>
      <div className={classes.circle}>
        <img src={starIcon} />
      </div>
    </div>
  );
};
