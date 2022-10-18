import { createPortal } from "react-dom";
import classes from "./footer.module.css";

const FooterText = () => {
  return (
    <small>
      Challenge by <a href="https://www.frontendmentor.io/">Frontend Mentor</a>.
      Coded by <a href="https://github.com/NutchaponMake">Nutchapon</a>.
    </small>
  );
};

export const Footer = (props) => {
  return (
    <>{createPortal(<FooterText />, document.getElementById("footerText"))}</>
  );
};
