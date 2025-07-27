import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const addTasks = createAsyncThunk("Task/addTask", async (task) => {
  const respons = await axios.post("http://localhost:3000/tasks", task);
  return respons.data;
});
export const fetchTasks = createAsyncThunk("Task/fetchTasks", async () => {
  const respons = await axios.get("http://localhost:3000/tasks");
  return respons.data;
});
export const deleteTask = createAsyncThunk("Task/deleteTasks", async (id) => {
  await axios.delete(`http://localhost:3000/tasks/${id}`);
  return id;
});
export const editStatus = createAsyncThunk(
  "Task/editTasks",
  async ({ id, status }) => {
    const edited = await axios.patch(`http://localhost:3000/tasks/${id}`, {
      status: status,
    });
    return edited.data;
  }
);
const taskSlice = createSlice({
  name: "taskSlice",
  initialState: { loading: false, taskList: [], error: false },
  extraReducers: (builder) => {
    builder
      .addCase(addTasks.fulfilled, (state, action) => {
        state.taskList.push(action.payload);
      })
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.taskList = action.payload;
        state.loading = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.taskList = state.taskList.filter(
          (task) => task.id != action.payload
        );
      })
      .addCase(editStatus.fulfilled, (state, action) => {
        const editIndex = state.taskList.findIndex(
          (tasks) => tasks.id == action.payload.id
        );
        state.taskList[editIndex].status = action.payload.status;
      });
  },
});

export default taskSlice.reducer;
