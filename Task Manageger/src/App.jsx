import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTasks,
  deleteTask,
  editStatus,
  fetchTasks,
} from "./Redux/taskSlice";
import { useEffect } from "react";
function App() {
  const [Task, setTask] = useState({ title: "", task: "", status: "pending" });
  const { loading, taskList, error } = useSelector((state) => state.taskSate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  const handilSubmit = (e) => {
    e.preventDefault();
    dispatch(addTasks(Task));
    setTask({ title: "", task: "", status: "Pending" });
  };
  const handilDelete = (removeid) => {
    dispatch(deleteTask(removeid));
  };

  const handilSelect = (value, id) => {
    value === "Pending" && dispatch(editStatus({ id: id, status: "pending" }));
    value === "ongoing" &&
      dispatch(editStatus({ id: id, status: "ongoing" }));
    value === "Completed" &&
      dispatch(editStatus({ id: id, status: "Completed" }));
  };
  return (
    <div id="MainDiv">
      <h1>Mini Task Tracker</h1>
      <p style={{ fontSize: 20 }}>Add a task for do</p>
      <form
        onSubmit={(e) => {
          handilSubmit(e);
        }}
        action=""
      >
        {" "}
        <label>Title:</label>
        <input
          value={Task.title}
          onChange={(e) => {
            setTask({ ...Task, title: e.target.value });
          }}
          type="text"
        />
        <label>Task to complete:</label>
        <input
          value={Task.task}
          onChange={(e) => {
            setTask({ ...Task, task: e.target.value });
          }}
          type="text"
        />
        <button>Add Task</button>
      </form>
      {loading && <p>Loading...</p>}
      {taskList.map((task, index) => {
        return (
          <div
            className={`taskDiv ${task.status}`}
            id="taskDiv"
            key={task.id}
          >
            <li>{index + 1}</li>
            <div>
              <b>
                <p>Title: {task.title}</p>
              </b>
              <p>What to do: {task.task}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
              <button
                onClick={() => {
                  handilDelete(task.id);
                }}
              >
                Delete
              </button>
              <select value={task.status} onChange={(e) => handilSelect(e.target.value, task.id)}>
                <option value="Pending">On Pending</option>
                <option value="ongoing">On going</option>
                <option value="Completed">Complted</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
