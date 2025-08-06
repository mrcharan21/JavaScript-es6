import React, {useRef, useState} from 'react'

export default function UseRef() {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    const focusInput = ()=> {
        inputRef.current.focus();
    };
  return (
    <div>
        <h2>useRef Input</h2>
        <input ref={inputRef} type="text" placeholder='Focus me!' />
        <button onClick={()=> setCount(count +1)}>Focus Input</button>
        <p>Render Count: {count}</p>
    </div>
  )
}
