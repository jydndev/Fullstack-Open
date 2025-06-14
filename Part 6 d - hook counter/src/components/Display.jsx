import { useContext } from 'react';
import CounterContext from '../CounterContext';

const Display = ({ counter }) => {
  const [counter] = useContext(CounterContext);
  return <div>{counter}</div>;
};

export default Display;
