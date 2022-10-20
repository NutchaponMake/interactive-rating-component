import { useRef, useState } from "react";
import "./App.css";
import { Card } from "./ui/Card/Card";
import { Button } from "./ui/Button/Button";
import { ChoiceContainer } from "./components/ChoiceContainer/ChoiceContainer";
import { Description } from "./components/Description/Description";
import { Star } from "./components/Star/Star";
import { Thanks } from "./components/Thanks/Thanks";
import { Footer } from "./components/Footer/Footer";

const numbersArray = [1, 2, 3, 4, 5];

function App() {
  console.log("RENDER!");
  const choiceRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState("0");

  const maxScore = numbersArray.length;

  const onSubmitScoreHandler = (ev) => {
    ev.preventDefault();

    selectedScoreHandler(choiceRef.current.value);
    setIsSubmitted((prevState) => !prevState);
  };

  const onBackClickHandler = (ev) => {
    ev.preventDefault();
    setScore("0");
    setIsSubmitted((prevState) => !prevState);
  };

  const selectedScoreHandler = (score) => {
    setScore(score);
  };

  let content = (
    <>
      <Card>
        <Star />
        <Description isSubmitted={isSubmitted} />
        <ChoiceContainer numbersArray={numbersArray} ref={choiceRef} />
        <Button text="SUBMIT" type="button" onClick={onSubmitScoreHandler} />
      </Card>
      <Footer />
    </>
  );
  if (isSubmitted) {
    content = (
      <>
        <Card>
          <Thanks score={score} maxScore={maxScore} />
          <Description isSubmitted={isSubmitted} />
          <Button text="Back" type="button" onClick={onBackClickHandler} />
        </Card>
        <Footer />
      </>
    );
  }

  return content;
}

export default App;
