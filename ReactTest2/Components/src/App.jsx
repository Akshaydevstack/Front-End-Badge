import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Acomponet from "./components/Acomponet";
import Bcomponet from "./components/Bcomponet";
import Ccomponet from "./components/Ccomponet";
import { useMemo } from "react";
import { useCallback } from "react";

function App() {
  const [count, setCount] = useState(true);
  const data = { name: "akshay" };


const fun= useCallback(()=>{
  return {id:1 }
},[count])
   


  return (
    <>
      {count && <h1>Heloo</h1>}
      <Acomponet count={count} setCount={setCount}  />
      <Bcomponet />
      <Ccomponet />
      <button onClick={() => setCount((prev) => !prev)}>Click</button>
    </>
  );
}

export default App;
