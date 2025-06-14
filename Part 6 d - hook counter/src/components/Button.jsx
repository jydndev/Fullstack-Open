import { useContext } from 'react';
import CounterContext from '../CounterContext';

const Button = ({ dispatch, type, label }) => {
  const [counter, dispatch] = useContext(CounterContext);
  return <button onClick={() => dispatch({ type })}>{label}</button>;
};

export default Button;
