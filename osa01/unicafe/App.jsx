import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good +1)
  const handleNeutralClick = () => setNeutral(neutral +1)
  const handleBadClick = () => setBad(bad +1)
  
  return (
      <div>
        <h3>Give Feedback</h3>
        <Button onClick={handleGoodClick} text="good"/>
        <Button onClick={handleNeutralClick} text="neutral"/>
        <Button onClick={handleBadClick} text="bad"/>  
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}
  const Statistics = (props) => {
    const total = props.good + props.neutral + props.bad
    
    if (total === 0) {
      return <div>No feedback given</div>;
    }

    const average = () => (props.good - props.bad) / total;
    const positive = () => (props.good/total) *100 + " %";

    return(
      <div>
        <table>
          <caption>Statistics</caption>
          <tbody>
            <StatisticLine text="good" value ={props.good} />
            <StatisticLine text="neutral" value ={props.neutral} />
            <StatisticLine text="bad" value ={props.bad} />
            <StatisticLine text="all" value ={total} />
            <StatisticLine text="average" value ={average()} />
            <StatisticLine text="positive" value ={positive()} />
          </tbody>
        </table>
      </div>
    )
  }
  const StatisticLine = ({text, value}) => {
    return <tr><td>{text}</td><td>{value}</td></tr>
  }

export default App
