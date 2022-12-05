import theme from "styled-theming";

export const white = "#ffff";
export const brightblue = "hsl(220, 98%, 61%)";
export const checkboxBackgroundColor = "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";

export enum DarkThemeVariables {
  darkBackgroundColor = "hsl(235, 21%, 11%)",
  textColor = "hsl(234, 11%, 52%)",
  desaturatedBackgroundcolor = "hsl(235, 24%, 19%)",
  borderColor = "hsl(237, 14%, 26%)"
}

export enum LightThemeVariables {
  textColor = "hsl(235, 19%, 35%)",
  borderColor = "hsl(233, 11%, 84%)",
  checkboxBorder = "hsl(236, 33%, 92%)",
}

export const backgroundColor = theme("theme", {
  light: white,
  dark: DarkThemeVariables.darkBackgroundColor
})

export const textColor = theme("theme", {
  light: LightThemeVariables.textColor,
  dark: DarkThemeVariables.textColor
})

export const todoBackgroundColor = theme("theme", {
  light: white,
  dark: DarkThemeVariables.desaturatedBackgroundcolor
})

export const borderColor = theme("theme", {
  light: LightThemeVariables.borderColor,
  dark: DarkThemeVariables.borderColor
})

export const checkboxBorderColor = theme("theme", {
  light: LightThemeVariables.checkboxBorder,
  dark: DarkThemeVariables.borderColor
})