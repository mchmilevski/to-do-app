import { useEffect, useState } from "react";
import "./todoList.styles.tsx";
import TodoRow from "../TodoRow/TodoRow.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateFilters, clearCompleted } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { Filters, ToDoItem } from "../../store/todoSlice";
import {
  ListContainer,
  Footer,
  FilterText,
  ActiveButton,
  ClearCompleted,
} from "./todoList.styles";

function TodoList() {
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState<ToDoItem[]>([]);

  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const selectedFilter = useSelector(
    (state: RootState) => state.todo.selectedFilter
  );

  useEffect(() => {
    if (selectedFilter) {
      if (Filters.AllTodos) {
        toggleAllFilter();
      } else if (Filters.ActiveTodos) {
        toggleActiveFilter();
      } else {
        toggleCompletedFilter();
      }
    }
  }, []);

  useEffect(() => {
    setFilteredList([...todoList]);
  }, [todoList]);

  const getItemsLeftCount = () =>
    todoList.reduce((sum, current) => {
      if (!current.completed) {
        sum += 1;
      }

      return sum;
    }, 0);

  const toggleAllFilter = () => {
    dispatch(updateFilters(Filters.AllTodos));
    setFilteredList([...todoList]);
  };

  const toggleActiveFilter = () => {
    dispatch(updateFilters(Filters.ActiveTodos));
    const incompletedList = todoList.filter((todo) => !todo.completed);
    setFilteredList([...incompletedList]);
  };

  const toggleCompletedFilter = () => {
    dispatch(updateFilters(Filters.CompletedTodos));
    const completedList = todoList.filter((todo) => todo.completed);
    setFilteredList([...completedList]);
  };

  const toggleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <ListContainer>
      {filteredList.map((item: ToDoItem, index: number) => (
        <TodoRow todo={item} key={index} />
      ))}
      <Footer>
        <span>{getItemsLeftCount()} items left</span>
        <div>
          <FilterText
            onClick={toggleAllFilter}
            active={selectedFilter === Filters.AllTodos}
          >
            All
          </FilterText>
          <ActiveButton
            onClick={toggleActiveFilter}
            active={selectedFilter === Filters.ActiveTodos}
          >
            Active
          </ActiveButton>
          <FilterText
            onClick={toggleCompletedFilter}
            active={selectedFilter === Filters.CompletedTodos}
          >
            Completed
          </FilterText>
        </div>
        <ClearCompleted onClick={toggleClearCompleted}>
          Clear Completed
        </ClearCompleted>
      </Footer>
    </ListContainer>
  );
}

export default TodoList;
