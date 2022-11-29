import todoReducer from "./todoSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
