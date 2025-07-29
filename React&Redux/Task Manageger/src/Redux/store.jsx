import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
const Store = configureStore({
  reducer: {
    taskSate: taskReducer,
  },
});
export default Store;
