import React, { useContext } from "react";
import { DateContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function ShowInputPage() {
  const { data, setData } = useContext(DateContext);
  const navigate=useNavigate()
  return (
    <div id="ShowInput">
      <h1>ShowInputPage</h1>
      <span>Your Name:{data.name}</span>
      <span> Your Email:{data.email}</span>
      <button onClick={()=>{navigate("Nextedcomponemt")}}>Show more details</button>
    </div>
  );
}
