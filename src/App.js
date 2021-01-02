import React, { useState } from "react";
function useCounter(initialCount, v) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + v);
  };
  const decrement = () => {
    setCount(count - v);
  };
  return { count, increment, decrement };
}

function App() {
  const counter = useCounter(0, 2);
  const counter2 = useCounter(10, 20);

  return (
    <div>
      <p>count: {counter.count}</p>
      <button onClick={counter.decrement}>-</button>
      <button onClick={counter.increment}>+</button>

      <p>count: {counter2.count}</p>
      <button onClick={counter2.decrement}>-</button>
      <button onClick={counter2.increment}>+</button>
    </div>
  );
}
export default App;
