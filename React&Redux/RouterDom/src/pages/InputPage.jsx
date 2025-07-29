import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateContext } from "../App";



export default function InputPage() {
  const { data, setData } = useContext(DateContext);
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", email: "" });

  const handilSubmit=()=>{
    setData(input)
    navigate("ShowInputPage");
  }
  return (
    <div id="inputpage">
      <h2>Enter your Details</h2>
      <input
        value={input.name}
        onChange={(e) => setInput({ ...input, name: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <input
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        type="text"
        placeholder="Email"
      />
      <button
        onClick={handilSubmit}
      >
        Submit
      </button>
    </div>
  );
}
