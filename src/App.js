import "./App.css";

import { FeedbackOptions } from "./components/FeedbackOptions";
import { useState } from "react/cjs/react.development";
import { Options } from "./components/Options";

export default function App (props) {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <FeedbackOptions
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
      />
      <Options 
      good={good}
      neutral={neutral}
      bad={bad}
      total={props.total}
      percantage={props.percantage}
      />
    </>
  );
}