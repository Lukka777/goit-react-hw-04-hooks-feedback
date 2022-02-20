export function Options (props) {
  const total = props.good + props.neutral + props.bad;
  const percantage = (props.good /total) * 100;
return(
  total === 0 ? "There is no feedback" :
          <div>
          <p>good={props.good}</p>
          <p>neutral={props.neutral}</p>
          <p>bad={props.bad}</p>
          <p>total={total}</p>
          <p>Positive Feedback ={percantage}</p>
        </div>
)
}






