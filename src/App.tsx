import ToDo from "./components/Todo/ToDo.component";
import DarkHeaderImage from "./assets/bg-desktop-dark.jpg";
import LightHEaderImage from "./assets/bg-desktop-light.jpg";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/themeProviderSlice";
import { AppContainer, BackgroundImage } from "./styles/App.styles";

const App = () => {
  const darkThemeEnabled = useSelector(selectTheme);

  return (
    <AppContainer>
      <BackgroundImage
        imageUrl={darkThemeEnabled ? DarkHeaderImage : LightHEaderImage}
      >
        <ToDo />
      </BackgroundImage>
    </AppContainer>
  );
}

export default App;
