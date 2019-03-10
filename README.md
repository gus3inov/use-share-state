# React Shared State Hook 🔗

React hook for state synchronization between (windows, tabs).

This hook is based on a [broadcast-channel](https://github.com/pubkey/broadcast-channel) library that works in New Browsers, Old Browsers, WebWorkers and NodeJs.

## Installation

```bash
$ npm install use-shared-state
```
## Usage

```js
import useSharedState from "use-shared-state";

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
```

## Api



## License

MIT © [Muslim Guseinov](https://github.com/gus3inov)