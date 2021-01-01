import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((prevCount) => (prevCount === 0 ? (prevCount = 60) : prevCount - 1));
    }, 1000);
    return () => clearInterval(time);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(60)}>ボタン</button>
    </>
  );
}

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>スイッチ</button>
      {visible ? <Timer /> : ""}
    </>
  );
}

export default App;
