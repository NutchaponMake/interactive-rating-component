import classes from "./button.module.css";

export const Button = (props) => {
  return (
    <div>
      <button className={classes.btn} type={props.type} onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  );
};
