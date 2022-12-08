import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum Filters {
  AllTodos = "allTodos",
  ActiveTodos = "activeTodos",
  CompletedTodos = "completedTodos",
}

export enum ListType {
  ActiveTodos = "activeTodos",
  CompletedTodos = "completedTodos",
}

export type ToDoItem = {
  id: number;
  name: string;
  completed: boolean;
};

export interface ToDoState {
  activeTodos: ToDoItem[];
  completedTodos: ToDoItem[];
  idCount: number;
  selectedFilter: string;
}

const initialState: ToDoState = {
  activeTodos: [],
  completedTodos: [],
  idCount: 0,
  selectedFilter: Filters.AllTodos,
};

const findTodo = (list: ToDoItem[], id: number) => {
  return list.find((todo) => todo.id === id);
};

const filterTodos = (list: ToDoItem[], id: number) => {
  return list.filter((todo) => todo.id !== id);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    incrementIdCount: (state) => {
      state.idCount++;
    },
    addToList: (state, action: PayloadAction<ToDoItem>) => {
      state.activeTodos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const foundTodo = findTodo(state.activeTodos, action.payload);
      if (foundTodo) {
        // Remove completed todo from active todos list
        const newList = filterTodos(state.activeTodos, foundTodo.id);
        state.activeTodos = newList;

        // Add completed todo in the completed todos list
        state.completedTodos.push({ ...foundTodo, completed: true });
      }
    },
    updateFilters: (state, action: PayloadAction<Filters>) => {
      state.selectedFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.completedTodos = [];
    },
    editTodo: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        completed: boolean;
        newName: string;
      }>
    ) => {
      let todo;
      if (action.payload.completed) {
        todo = findTodo(state.completedTodos, action.payload.id);
      } else {
        todo = findTodo(state.activeTodos, action.payload.id);
      }
      
      if (todo) {
        todo.name = action.payload.newName;
      }
    },
    removeTodo: (state, action: PayloadAction<ToDoItem>) => {
      if (action.payload.completed) {
        const foundTodo = findTodo(state.completedTodos, action.payload.id);
        if (foundTodo) {
          const newTodos = filterTodos(state.completedTodos, foundTodo.id);
          state.completedTodos = newTodos;
        }
      } else {
        const foundTodo = findTodo(state.activeTodos, action.payload.id);
        if (foundTodo) {
          const newTodos = filterTodos(state.activeTodos, foundTodo.id);
          state.activeTodos = newTodos;
        }
      }
    },
    reorderList: (
      state,
      action: PayloadAction<{ reorderedList: ToDoItem[]; list: string }>
    ) => {
      if (action.payload.list === ListType.ActiveTodos) {
        state.activeTodos = action.payload.reorderedList;
      } else {
        state.completedTodos = action.payload.reorderedList;
      }
    },
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
  reorderList,
} = todoSlice.actions;
export default todoSlice.reducer;
