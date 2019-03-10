import React, { useCallback } from 'react';
import useSharedState from './useSharedState';
import './App.css';

const App = () => {
  const [state, setState] = useSharedState(0);

  const increment = useCallback(() => {
    setState(state + 1);
  }, [state]);

  const decrement = useCallback(() => {
    setState(state - 1);
  }, [state]);

  return (
    <div className="App">
      Counter: {state}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
