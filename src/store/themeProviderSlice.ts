import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum Theme { 
  Dark = "dark",
  Light = "light"
}

export interface DarkThemeState {
  darkThemeEnabled: boolean;
}

const initialState: DarkThemeState = {
  darkThemeEnabled: false,
};

export const themeProviderSlice = createSlice({
  name: "themeProvider",
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    },
  },
});

export const selectTheme = (state: RootState) => state.themeProvider.darkThemeEnabled;
export const { toggleDarkTheme } = themeProviderSlice.actions;
export default themeProviderSlice.reducer;
