import { useEffect, useState } from "react";
import "./todoList.styles.scss";
import TodoRow from "../TodoRow/TodoRow.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateFilters, clearCompleted } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { Filters, ToDoItem } from "../../store/todoSlice";

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

  const attachFilterClass = (filter: Filters) =>
    selectedFilter === filter ? "filter" : "";

  const toggleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="list-container">
      {filteredList.map((item: ToDoItem, index: number) => (
        <TodoRow todo={item} key={index} />
      ))}
      <div className="footer">
        <div className="count">
          <span>{getItemsLeftCount()} items left</span>
        </div>
        <div className="filters">
          <span
            onClick={toggleAllFilter}
            className={attachFilterClass(Filters.AllTodos)}
          >
            All
          </span>
          <span
            onClick={toggleActiveFilter}
            className={`active-text ${attachFilterClass(Filters.ActiveTodos)}`}
          >
            Active
          </span>
          <span
            onClick={toggleCompletedFilter}
            className={attachFilterClass(Filters.CompletedTodos)}
          >
            Completed
          </span>
        </div>
        <div className="clear-completed">
          <span onClick={toggleClearCompleted}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
