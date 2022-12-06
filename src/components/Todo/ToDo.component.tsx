import "./todo.styles.tsx";
import TodoInput from "../TodoInput/TodoInput.component";
import TodoList from "../TodoList/TodoList.component";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme, selectTheme } from "../../store/themeProviderSlice";
import { Container, Header, Title, DragAndDropInfoText } from "./todo.styles";

const themeToggleIcon = {
  color: "white",
  fontSize: "25px",
  cursor: "pointer",
};

const ToDo = () => {
  const dispatch = useDispatch();
  const darkThemeEnabled = useSelector(selectTheme);

  const setTheme = () => {
    dispatch(toggleDarkTheme());
  };

  return (
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
      <DragAndDropInfoText>Drag and drop to reorder list</DragAndDropInfoText>
    </Container>
  );
};

export default ToDo;
