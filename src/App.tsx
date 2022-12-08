import { useMediaQuery } from "react-responsive";
import DarkHeaderImage from "./assets/bg-desktop-dark.jpg";
import LightHEaderImage from "./assets/bg-desktop-light.jpg";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, toggleDarkTheme } from "./store/themeProviderSlice";
import {
  AppContainer,
  BackgroundImage,
  Container,
  Header,
  Title,
  DragAndDropInfoText,
} from "./styles/App.styles";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoInput from "./components/TodoInput/TodoInput.component";
import TodoList from "./components/TodoList/TodoList.component";
import Filters from "./components/Filters/Filters.component";
const themeToggleIcon = {
  color: "white",
  fontSize: "25px",
  cursor: "pointer",
};

const App = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 650px)` });
  const darkThemeEnabled = useSelector(selectTheme);

  const setTheme = () => {
    dispatch(toggleDarkTheme());
  };

  return (
    <AppContainer>
      <BackgroundImage
        imageUrl={darkThemeEnabled ? DarkHeaderImage : LightHEaderImage}
      >
        <Container>
          <Header>
            <Title>TODO</Title>
            {darkThemeEnabled ? (
              <FaSun onClick={setTheme} style={themeToggleIcon} />
            ) : (
              <FaMoon onClick={setTheme} style={themeToggleIcon} />
            )}
          </Header>
          <TodoInput />
          <TodoList />
          {isMobile && <Filters />}
          <DragAndDropInfoText>
            Drag and drop to reorder list
          </DragAndDropInfoText>
        </Container>
      </BackgroundImage>
    </AppContainer>
  );
};

export default App;
