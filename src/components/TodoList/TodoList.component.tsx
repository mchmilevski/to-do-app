import { Fragment } from "react";
import "./todoList.styles.tsx";
import { RootState } from "../../store/store";
import { FilterType, ListType } from "../../store/todoSlice";
import { useSelector } from "react-redux";
import { ListContainer } from "./todoList.styles";
import Footer from "../Footer/Footer.component";
import DragDropList from "../DragDropList/DragDropList.component";

const TodoList = () => {
  const activeTodos = useSelector((state: RootState) => state.todo.activeTodos);
  const completedTodos = useSelector(
    (state: RootState) => state.todo.completedTodos
  );
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  return (
    <ListContainer>
      {selectedFilter === FilterType.AllTodos && (
        <Fragment>
          <DragDropList
            todosList={activeTodos}
            listName={ListType.ActiveTodos}
          />
          <DragDropList
            todosList={completedTodos}
            listName={ListType.CompletedTodos}
          />
        </Fragment>
      )}
      {selectedFilter === FilterType.ActiveTodos && (
        <DragDropList todosList={activeTodos} listName={ListType.ActiveTodos} />
      )}
      {selectedFilter === FilterType.CompletedTodos && (
        <DragDropList
          todosList={completedTodos}
          listName={ListType.CompletedTodos}
        />
      )}
      <Footer />
    </ListContainer>
  );
};

export default TodoList;
