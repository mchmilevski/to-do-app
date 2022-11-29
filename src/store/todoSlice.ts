import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToDoState {
  todoList: { name: string; completed: boolean }[];
  filters: { all: boolean, active: boolean, completed: boolean}
}

const initialState: ToDoState = {
  todoList: [],
  filters: {
    all: true,
    active: false,
    completed: false
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.todoList.push(action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.name === action.payload);
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    updateFilters: (state, action) => {
      state.filters = {...action.payload}
    }
  },
});

export const { addToList, updateTodo, updateFilters } = todoSlice.actions;
export default todoSlice.reducer;
