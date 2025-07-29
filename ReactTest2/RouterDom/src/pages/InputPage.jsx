import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { useEffect } from "react";
export default function InputPage() {
  const [input, setInput] = useState({ name: "", email: "" });
  const { data, setData } = useContext(DataContext);
  const navigate = useNavigate();
  const handilsubmiut = () => {
    navigate("showInput");
    setData(input);
  };

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("Un Mount");
    };
  }, [input]);
  return (
    <div id="inputPage">
      InputPage
      <input
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        type="text"
      />
      <input
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        type="text"
      />
      <button onClick={handilsubmiut}>Submit</button>
      <button onClick={() => navigate("ShowMorePage")}>Show more</button>
    </div>
  );
}
