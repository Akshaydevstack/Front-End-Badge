import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import useTimer from "../Hooks/useTimer";

export default function ShowMorePage() {
  const { data } = useContext(DataContext);
  const { count, start, stop, reset } = useTimer();

  return (
    <div>
      <h1>Timer page</h1>
      <button onClick={start}>Start</button>
      <h2>{count}</h2>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Restart</button>
    </div>
  );
}
