import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Filters {
  AllTodos = "allTodos",
  ActiveTodos = "activeTodos",
  CompletedTodos = "completedTodos",
}

export type ToDoItem = {
  id: number;
  name: string;
  completed: boolean;
};

export interface ToDoState {
  idCount: number;
  todoList: ToDoItem[];
  selectedFilter: string;
}

const initialState: ToDoState = {
  idCount: 0,
  todoList: [],
  selectedFilter: Filters.AllTodos,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    incrementIdCount: (state) => {
      state.idCount++
    },
    addToList: (state, action) => {
      state.todoList.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
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
        (todo) => todo.id === action.payload.id
      );
      if (todo) {
        todo.name = action.payload.newName;
      }
    },
    removeTodo: (state, action) => {
      const foundTodo = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      if (foundTodo) {
        const newTodos = state.todoList.filter(todo => todo.id !== foundTodo.id);
        state.todoList = newTodos
      }
    },
    reorderTodoList: (state, action) => {
      state.todoList = action.payload
    }
  },
});

export const {
  incrementIdCount,
  addToList,
  toggleTodo,
  updateFilters,
  clearCompleted,
  editTodo,
  removeTodo,
  reorderTodoList,
} = todoSlice.actions;
export default todoSlice.reducer;
