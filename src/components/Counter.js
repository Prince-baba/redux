// components/Counter.js
'use client';

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../lib/features/counter/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
