import React, { useEffect, useState } from "react";
import "./todoList.styles.scss";
import TodoElement from "../TodoElement/TodoElement.component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { updateFilters } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

function TodoList() {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const filters = useSelector((state: RootState) => state.todo.filters);
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState<
    { name: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    setFilteredList([...todoList]);
  }, [todoList]);

  useEffect(() => {
    if (filters) {
      if (filters.all) {
        toggleAllFilter()
      } else if (filters.active) {
        toggleActiveFilter()
      } else {
        toggleCompletedFilter()
      }
    }
  }, [])

  const getItemsLeftCount = () =>
    todoList.reduce((sum, current) => {
      if (!current.completed) {
        sum += 1;
      }

      return sum;
    }, 0);

  const toggleAllFilter = () => {
    dispatch(updateFilters({ all: true, active: false, completed: false }));
    setFilteredList([...todoList]);
  };

  const toggleActiveFilter = () => {
    dispatch(updateFilters({ all: false, active: true, completed: false }));
    const incompletedList = todoList.filter((todo) => !todo.completed);
    setFilteredList([...incompletedList]);
  };

  const toggleCompletedFilter = () => {
    dispatch(updateFilters({ all: false, active: false, completed: true }));
    const completedList = todoList.filter((todo) => todo.completed);
    setFilteredList([...completedList]);
  };

  console.log(filters)

  return (
    <div className="list-container">
      {filteredList.map((item) => (
        <TodoElement todo={item} />
      ))}
      <div className="footer">
        <div className="count">
          <span>{getItemsLeftCount()} items left</span>
        </div>
        <div className="filters">
          <span onClick={toggleAllFilter} className={`${filters.all ? 'filter' : ""}`}>All</span>
          <span onClick={toggleActiveFilter} className={`active-text ${filters.active ? 'filter' : ""}`}>
            Active
          </span>
          <span onClick={toggleCompletedFilter} className={`${filters.completed ? 'filter' : ""}`}>Completed</span>
        </div>
        <div className="clear-completed">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
