import { Fragment } from "react";
import "./todoList.styles.tsx";
import { RootState } from "../../store/store";
import { updateFilters, Filters, ListType } from "../../store/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { ListContainer } from "./todoList.styles";
import Footer from "../Footer/Footer.component";
import DragDropList from "../DragDropList/DragDropList.component";

const TodoList = () => {
  const dispatch = useDispatch();

  const activeTodos = useSelector((state: RootState) => state.todo.activeTodos);
  const completedTodos = useSelector(
    (state: RootState) => state.todo.completedTodos
  );
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  const toggleAllFilter = () => {
    dispatch(updateFilters(Filters.AllTodos));
  };

  const toggleActiveFilter = () => {
    dispatch(updateFilters(Filters.ActiveTodos));
  };

  const toggleCompletedFilter = () => {
    dispatch(updateFilters(Filters.CompletedTodos));
  };

  return (
    <ListContainer>
      {selectedFilter === Filters.AllTodos && (
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
      {selectedFilter === Filters.ActiveTodos && (
        <DragDropList todosList={activeTodos} listName={ListType.ActiveTodos} />
      )}
      {selectedFilter === Filters.CompletedTodos && (
        <DragDropList
          todosList={completedTodos}
          listName={ListType.CompletedTodos}
        />
      )}
      <Footer
        toggleCompletedFilter={toggleCompletedFilter}
        toggleActiveFilter={toggleActiveFilter}
        toggleAllFilter={toggleAllFilter}
      />
    </ListContainer>
  );
};

export default TodoList;
