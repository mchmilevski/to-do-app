import todoReducer from "./todoSlice";
import themeProviderReducer from "./themeProviderSlice";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todo: todoReducer,
  themeProvider: themeProviderReducer
});
