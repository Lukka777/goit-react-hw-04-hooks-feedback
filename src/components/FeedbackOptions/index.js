export function FeedbackOptions(props) {
  
  return (
    <div>
      <button onClick={() => props.setGood(props.good + 1)}>Good</button>
      <button onClick={() => props.setNeutral(props.neutral + 1)}>Neutral</button>
      <button onClick={() => props.setBad(props.bad + 1)}>Bad</button>
    </div>
  );
}

