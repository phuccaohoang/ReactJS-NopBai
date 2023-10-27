import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/task/taskSlice";

export default configureStore({
    reducer: {
        task: taskReducer,
    },
})