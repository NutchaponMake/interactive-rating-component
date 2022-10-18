import classes from "./description.module.css";

export const Description = (props) => {
  let header = `How did we do?`;
  let paragraph = `Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!`;

  if (props.isSubmitted) {
    header = `Thank you!`;
    paragraph = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  }

  return (
    <div
      className={
        props.isSubmitted ? classes["text-center"] : classes["text-left"]
      }
    >
      <h1 className={classes.title}>{header}</h1>
      <p>{paragraph}</p>
    </div>
  );
};
