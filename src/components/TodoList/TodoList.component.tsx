import React from "react";
import "./todoList.styles.scss";
import TodoElement from "../TodoElement/TodoElement.compoenent";

interface ToDoListProps {
  todoList: { todo: string; completed: boolean }[];
  // setTodoList: () => { todo: string; completed: boolean }[]
}

function TodoList({ todoList }: ToDoListProps) {
  console.log(todoList);

  const getItemsLeftCount = () =>
    todoList.reduce((sum, current) => {
      if (!current.completed) {
        sum += 1;
      }

      return sum;
    }, 0);

  return (
    <div className="list-container">
      {todoList.map((item) => (
        <TodoElement element={item} />
      ))}
      <div className="footer">
        <div className="count">
          <span>{getItemsLeftCount()} items left</span>
        </div>
        <div className="filters">
          <span onClick={()=>console.log('clock')}>All</span>
          <span className="active-text">Active</span>
          <span>Completed</span>
        </div>
        <div className="clear-completed">
          <span>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
