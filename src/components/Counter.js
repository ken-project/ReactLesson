import React, { useState } from 'react';
import "./Counter.css";

export default function Counter(){
  const [count, setCount] = useState(0);

  const incrementCount = () => {    const newCount = count >= 10 ? 0 : count + 1;
    setCount(newCount);
  };

  return (
    <>
      <div className="counter">カウント: {count}</div>    
      <button onClick={incrementCount}>ボタン</button>
    </>
  );
}