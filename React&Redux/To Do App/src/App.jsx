import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handilAdd = () => {
    if (editIndex == null) {
      setData([...data, input]);
      setInput("");
    }else{
     const updateData= [...data]
     updateData[editIndex]=input
     setData(updateData)
     setEditIndex(null)
    }
    setInput("")
    
  };

  const handilDelete = (removeIndex) => {
    setData(data.filter((_, index) => index != removeIndex));
  };
  const handilEdit = (index) => {
    setEditIndex(index);
    setInput(data[index]);
  };

  return (
    <div>
      <h1>To Do App</h1>
      <h2>Add a Note...</h2>
      <input
        style={{ height: 30, fontSize: "large" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={handilAdd}>
        {editIndex == null ? "Add note" : "Edit note"}
      </button>
      {data.map((note, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "green",
              border: "solid yellow",
              padding: 10,
              margin: 10,
              borderRadius: 10,
            }}
          >
            <p>{index + 1}</p>
            <data value="">{note}</data>
            <button
              onClick={() => {
                handilDelete(index);
              }}
            >
              Delete
            </button>
            <button onClick={() => handilEdit(index)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
