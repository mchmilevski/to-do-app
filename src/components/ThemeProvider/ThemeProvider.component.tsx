import { useSelector } from "react-redux";
import { ThemeProvider as StyledTheme } from "styled-components";
import { selectTheme, Theme } from "../../store/themeProviderSlice";

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const darkThemeEnabled = useSelector(selectTheme);

  return (
    <StyledTheme theme={{ theme: darkThemeEnabled ? Theme.Dark : Theme.Light }}>
      {children}
    </StyledTheme>
  );
};

export default ThemeProvider;
