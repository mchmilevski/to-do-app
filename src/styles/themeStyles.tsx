import theme from "styled-theming";

export const white = "#ffff";
export const brightblue = "hsl(220, 98%, 61%)";
export const checkboxBackgroundColor = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

export enum DarkThemeVariables {
  darkBackgroundColor = "hsl(235, 21%, 11%)",
  desaturatedBackgroundcolor = "hsl(235, 24%, 19%)",
  hoverTextColor = "hsl(234, 39%, 85%)",
  activeTodoText = "hsl(234, 39%, 85%)",
  completedToDoText = "hsl(233, 14%, 35%)",
  textColor = "hsl(234, 11%, 52%)",
  borderColor = "hsl(237, 14%, 26%)",
}

export enum LightThemeVariables {
  checkboxBorder = "hsl(236, 33%, 92%)",
  hoverTextColor = "hsl(235, 19%, 35%)",
  activeTodoText = "hsl(235, 19%, 35%)",
  completedToDoText = "hsl(233, 11%, 84%)",
  textColor = "hsl(236, 9%, 61%)",
  borderColor = "hsl(233, 11%, 84%)",
}

export const backgroundColor = theme("theme", {
  light: white,
  dark: DarkThemeVariables.darkBackgroundColor
})

export const todoBackgroundColor = theme("theme", {
  light: white,
  dark: DarkThemeVariables.desaturatedBackgroundcolor
})

export const checkboxBorderColor = theme("theme", {
  light: LightThemeVariables.checkboxBorder,
  dark: DarkThemeVariables.borderColor
})

export const hoverFooterText = theme("theme", {
  light: LightThemeVariables.hoverTextColor,
  dark: DarkThemeVariables.hoverTextColor
})

export const activeToDoTextColor = theme("theme", {
  light: LightThemeVariables.activeTodoText,
  dark: DarkThemeVariables.activeTodoText
})

export const completedToDoTextColor = theme("theme", {
  light: LightThemeVariables.completedToDoText,
  dark: DarkThemeVariables.completedToDoText
})

export const textColor = theme("theme", {
  light: LightThemeVariables.textColor,
  dark: DarkThemeVariables.textColor
})

export const borderColor = theme("theme", {
  light: LightThemeVariables.borderColor,
  dark: DarkThemeVariables.borderColor
})