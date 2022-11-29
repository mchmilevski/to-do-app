import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../../store/todoSlice";

function TodoInput() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const addNewTodo = (event: any) => {
    event.preventDefault();

    const todo = {
      name: newTodo,
      completed: false
    }

    dispatch(addToList(todo))
    event.target.reset();
  }

  const toggleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={(e) => addNewTodo(e)}>
      <input
        className="add-todo-input"
        type="text"
        name="todo"
        placeholder="Create a new todo..."
        onChange={(e) => toggleInput(e)}
      />
    </form>
  );
}

export default TodoInput;
