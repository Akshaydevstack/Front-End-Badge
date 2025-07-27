import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  deleteStudent,
  fetchStudentDetails,
  updateStatusStudent,
} from "./Redux/studentSlice";

function App() {
  const [student, setStudent] = useState({
    name: "",
    class: "",
    status: true,
  });
  const studentsDetails = useSelector(
    (store) => store.studentSate.studentDetails
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentDetails());
  }, []);

  const handilStudent = (e) => {
    e.preventDefault();
    dispatch(addStudent(student));
    setStudent({ name: "", class: "" });
  };

  const handilDelete = (removeId) => {
    dispatch(deleteStudent(removeId));
  };

const handilSelection=(e,id)=>{
const value=e.target.value
switch(value){
  case "Present": dispatch(updateStatusStudent({editeStatus:true,id:id}))
  break;
  case "Absent": dispatch(updateStatusStudent({editeStatus:false,id:id}))
  break;
  default: break;
}
}

  return (
    <div id="maindiv">
      <h2>Welcome to Student Management</h2>
      <div>
        <form
          onSubmit={(e) => {
            handilStudent(e);
          }}
          id="form"
          aria-required
        >
          <div>
            <label> Enter the student name</label>
            <input
              required
              value={student.name}
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
              type="text"
            />
          </div>
          <div>
            <label> Enter the student class</label>
            <input
              value={student.class}
              onChange={(e) =>
                setStudent({ ...student, class: e.target.value })
              }
              type="number"
            />
          </div>

          <button>Add Details</button>
        </form>
      </div>
      <h2> Students Details</h2>
      <div id="showStudent">
        {studentsDetails.map((value) => {
          return (
            <div key={value.id} id="studentdetials">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>Student id: {value.id}</h3>
               {value.status?  <p
                  style={{
                    backgroundColor: "green",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  Satus: Present
                </p>:
                 <p
                  style={{
                    backgroundColor: "red",
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  Satus: Absent
                </p>}
              </div>
              <p>Name:{value.name}</p>
              <p>Class:{value.class}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => {
                    handilDelete(value.id);
                  }}
                >
                  Delete
                </button>
                <select onChange={(e)=>{
                  handilSelection(e,value.id)
                }} name="" id="">
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
