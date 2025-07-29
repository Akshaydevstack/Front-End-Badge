import { useEffect, useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + 1 };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    case "color":
      return { ...state, color: !state.color };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: true });

  useEffect(() => {
    console.log("hii");

    return () => {
      console.log("clean");
    };
    
  }, [state]);

  return (
    <div style={{ background: state.color ? "green" : "red" }}>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "Decrement" });
        }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "color" })}>Change Colore</button>
    </div>
  );
}

export default App;
