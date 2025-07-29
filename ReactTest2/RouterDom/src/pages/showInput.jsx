import React from "react";
import { useContext } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function ShowInput() {
  const { data, setdata } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Check your deatisl</h1>
      <h3>Name:{data.name}</h3>
      <h3>Email:{data.email}</h3>
      <button
        onClick={() => {
          navigate("ShowMorePage");
        }}
      >
        Show more
      </button>
    </div>
  );
}
