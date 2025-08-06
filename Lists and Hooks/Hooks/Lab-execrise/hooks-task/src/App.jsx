import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, increment, decrement } from './Redux/Store';

function CounterApp() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
