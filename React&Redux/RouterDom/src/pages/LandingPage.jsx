import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate=useNavigate()
  return (
    <div id="Homepage">
      <u>
        {" "}
        <h2>Home Page</h2>
      </u>
      <button onClick={()=>navigate("Inputpage")}>Go to input</button>
    </div>
  );
}
