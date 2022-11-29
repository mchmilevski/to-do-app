import React, { useState } from "react";
import "./todoElement.styles.scss";
import { updateTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";

interface TodoElement {
  todo: { name: string; completed: boolean };
}

function TodoElement({ todo }: TodoElement) {
  const dispatch = useDispatch();

  const setIsChecked = () => {
    dispatch(updateTodo(todo.name));
  };

  return (
    <div className="to-do-element">
      <input type="checkbox" className={`${todo.completed ? 'checked' : ""}`} onChange={setIsChecked} />
      <span
        className={`item-text ${todo.completed ? "text-line-through" : ""}`}
      >
        {todo.name}
      </span>
    </div>
  );
}

export default TodoElement;
