import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum FilterType {
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
  selectedFilter: FilterType.AllTodos,
};

const findTodo = (list: ToDoItem[], id: number) => {
  return list.find((todo) => todo.id === id);
};

const filterTodos = (list: ToDoItem[], id: number) => {
  return list.filter((todo) => todo.id !== id);
};

const updateTodos = (state: ToDoState, listName: ListType, id: number) => {
  const newList = filterTodos(state[listName], id);
  state[listName] = newList;
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
    toggleTodo: (state, action: PayloadAction<ToDoItem>) => {
      if (action.payload.completed) {
        const foundTodo = findTodo(state.completedTodos, action.payload.id);
        if (foundTodo) {
          updateTodos(state, ListType.CompletedTodos, foundTodo.id);
          state.activeTodos.push({ ...foundTodo, completed: false });
        }
      } else {
        const foundTodo = findTodo(state.activeTodos, action.payload.id);
        if (foundTodo) {
          updateTodos(state, ListType.ActiveTodos, foundTodo.id);
          state.completedTodos.push({ ...foundTodo, completed: true });
        }
      }
    },
    updateFilters: (state, action: PayloadAction<FilterType>) => {
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
          updateTodos(state, ListType.CompletedTodos, foundTodo.id);
        }
      } else {
        const foundTodo = findTodo(state.activeTodos, action.payload.id);
        if (foundTodo) {
          updateTodos(state, ListType.ActiveTodos, foundTodo.id);
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
