import { useSelector } from "react-redux";
import { ThemeProvider as StyledTheme } from "styled-components";
import { selectTheme, Theme } from "../../store/themeProviderSlice";

interface ThemeProviderProps {
  children: JSX.Element;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const darkThemeEnabled = useSelector(selectTheme);

  return (
    <StyledTheme theme={{ theme: darkThemeEnabled ? Theme.Dark : Theme.Light }}>
      {children}
    </StyledTheme>
  );
};

export default ThemeProvider;
