import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);
  
  const handilStart = () => {
    if (timer.current == null)
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
  };

  const handilStop = () => {
    clearInterval(timer.current)
    timer.current=null
  };
  return (
    <>
      <button onClick={handilStart}>Start</button>
      <h2>{count}</h2>
      <button onClick={handilStop}>Stop</button>
    </>
  );
}

export default App;
