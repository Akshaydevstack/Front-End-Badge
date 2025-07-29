import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const prevSate = useRef(0);

  const hadilclick = (value) => {
    if (value === "Increment") {
      prevSate.current = count;
      setCount((prevSate) => prevSate + 1);
    } else if (value === "Decrement") {
      prevSate.current = count;
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
      <button onClick={(e) => hadilclick(e.target.value)} value="Increment">
        Increment
      </button>
      <div>{count}</div>
      <div>{prevSate.current}</div>
      <button onClick={(e) => hadilclick(e.target.value)} value="Decrement">
        Decrement
      </button>
    </>
  );
}

export default App;
