import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Filters {
  AllTodos = "allTodos",
  ActiveTodos = "activeTodos",
  CompletedTodos = "completedTodos",
}

export type ToDoItem = {
  name: string;
  completed: boolean;
};

export interface ToDoState {
  todoList: ToDoItem[];
  selectedFilter: string;
}

const initialState: ToDoState = {
  todoList: [],
  selectedFilter: Filters.AllTodos,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.name === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    updateFilters: (state, action) => {
      state.selectedFilter = action.payload;
    },
    clearCompleted: (state) => {
      const newTodos = state.todoList.filter((todo) => !todo.completed);
      state.todoList = newTodos;
    },
    editTodo: (state, action) => {
      const todo = state.todoList.find(
        (todo) => todo.name === action.payload.name
      );
      if (todo) {
        todo.name = action.payload.newName;
      }
    },
    removeTodo: (state, action) => {
      const foundTodo = state.todoList.find(
        (todo) => todo.name === action.payload
      );
      if (foundTodo) {
        const newTodos = state.todoList.filter(todo => todo.name !== foundTodo.name);
        state.todoList = newTodos
      }
    },
  },
});

export const {
  addToList,
  toggleTodo,
  updateFilters,
  clearCompleted,
  editTodo,
  removeTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
