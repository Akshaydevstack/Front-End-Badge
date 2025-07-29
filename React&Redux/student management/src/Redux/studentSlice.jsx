import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addStudent = createAsyncThunk(
  "Students/addStudent",
  async (studentDetails) => {
    const response = await axios.post(
      "http://localhost:3000/Students",
      studentDetails
    );
    return response.data;
  }
);

export const fetchStudentDetails = createAsyncThunk(
  "Students/fetchStudentDetails",
  async () => {
    const response = await axios.get("http://localhost:3000/Students");
    return response.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "Students/deleteStudentDetails",
  async (removeId) => {
    await axios.delete(`http://localhost:3000/Students/${removeId}`);
    return removeId;
  }
);

export const updateStatusStudent = createAsyncThunk(
  "updateStatusStudent",
  async ({ editeStatus, id }) => {
    const response = await axios.patch(`http://localhost:3000/Students/${id}`, {
      status: editeStatus,
    });
    return response.data;
  }
);

const studentSlice = createSlice({
  name: "Student Slice",
  initialState: { studentDetails: [] },
  extraReducers: (builder) => {
    builder
      .addCase(addStudent.fulfilled, (state, action) => {
        state.studentDetails.unshift(action.payload);
      })
      .addCase(fetchStudentDetails.fulfilled, (state, action) => {
        state.studentDetails = action.payload;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.studentDetails = state.studentDetails.filter(
          (studet) => studet.id != action.payload
        )
      })
     .addCase(updateStatusStudent.fulfilled, (state, action) => {
  const updatedStudent = action.payload;
  const editIndex = state.studentDetails.findIndex(
    (student) => student.id === updatedStudent.id
  );
  if (editIndex !== -1) {
    state.studentDetails[editIndex].status = updatedStudent.status;
  }
});
  },
});

export default studentSlice.reducer;
