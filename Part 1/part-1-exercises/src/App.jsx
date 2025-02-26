import { useState } from 'react';

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  all,
  average,
  positivePercentage,
}) => {
  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average.toFixed(2)} />
      <StatisticLine text="positive" value={positivePercentage.toFixed(2)} />
    </div>
  );
};

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  const average = all === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / all;
  const positivePercentage = all === 0 ? 0 : (good / all) * 100;

  const handleGood = () => {
    return setGood(good + 1);
  };
  const handleNeutral = () => {
    return setNeutral(neutral + 1);
  };
  const handleBad = () => {
    return setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={handleGood} text="good" />
        <Button onClick={handleNeutral} text="neutral" />
        <Button onClick={handleBad} text="bad" />
        <div>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            all={all}
            average={average}
            positivePercentage={positivePercentage}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
