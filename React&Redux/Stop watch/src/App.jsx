import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  const Start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const Stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const Reset= ()=>{
  clearInterval(timerRef)
  setCount(0)
  }
  return (
    <div>
      <button onClick={Start}>Start</button>
      <div>{count}</div>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
