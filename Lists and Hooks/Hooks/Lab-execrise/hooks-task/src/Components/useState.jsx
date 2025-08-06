import React, {useState} from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);

  return (
    <>
    <h2>Counter: {count}</h2>
    <button onClick={() => setCount(count +1)}>+</button>
    <button onClick={() => setCount(count -1)}>-</button>
    </>
  );
}
