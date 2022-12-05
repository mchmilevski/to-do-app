import ToDo from "./components/Todo/ToDo.component";
import DarkHeaderImage from "./assets/bg-desktop-dark.jpg";
import LightHEaderImage from "./assets/bg-desktop-light.jpg";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeProviderSlice";
import { AppContainer } from "./styles/App.styles";

function App() {
  const darkThemeEnabled = useSelector(selectTheme);

  return (
    <AppContainer>
      <img
        style={{ width: "100%" }}
        src={darkThemeEnabled ? DarkHeaderImage : LightHEaderImage}
      />
      <ToDo />
    </AppContainer>
  );
}

export default App;
