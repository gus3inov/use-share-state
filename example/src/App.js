import React, { useCallback } from 'react';
import useShareState from 'use-share-state';

const App = () => {
  const [state, setState] = useShareState(0);

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
