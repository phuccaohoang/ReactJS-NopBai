import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "task",
    initialState: {
        list: [],
    },
    
    reducers: {
        AddTask: (state, action) => {
            state.list.push(action.payload);
        },
        DelTask: (state, action) => {
            state.list = state.list.filter((item) => {
                return item != action.payload;
            })
        }
    }
})

export const { AddTask, DelTask} = taskSlice.actions;

export default taskSlice.reducer;