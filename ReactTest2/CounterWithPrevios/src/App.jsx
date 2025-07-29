import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const inputref = useRef();
  const Increment = () => {
    prevCount.current = count;
    setCount((prev) => prev + 1);
  };

  const Decrement = () => {
    prevCount.current = count;
    setCount((prev) => prev - 1);
  };

  const handilfocus = () => {
    inputref.current.focus();
  };
  return (
    <div id="Counter">
      <button onClick={Increment}>Increment</button>
      <span>current Count {count}</span>
      <span>Previos Count {prevCount.current}</span>
      <button onClick={Decrement}>Decrement</button>

      <input ref={inputref} type="text" />
      <button onClick={handilfocus}>Click to focus</button>
    </div>
  );
}

export default App;
