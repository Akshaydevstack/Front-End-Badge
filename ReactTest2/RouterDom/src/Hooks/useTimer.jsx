import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function useTimer() {
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  const start = () => {
    if (timer.current == null) {
      timer.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return { count, start, stop, reset };
}
