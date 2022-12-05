import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList, incrementIdCount } from "../../store/todoSlice";
import { RootState } from "../../store/store";
import {AddToDoInput} from '../Todo/todo.styles';

function TodoInput() {
  const dispatch = useDispatch();
  const idCount = useSelector((state: RootState) => state.todo.idCount);
  const [newTodo, setNewTodo] = useState<string>("");

  const addNewTodo = (event: any) => {
    event.preventDefault();
    dispatch(incrementIdCount())

    const todo = {
      id: idCount,
      name: newTodo,
      completed: false
    }

    dispatch(addToList(todo))
    event.target.reset();
  }

  const toggleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={(e) => addNewTodo(e)}>
      <AddToDoInput
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
