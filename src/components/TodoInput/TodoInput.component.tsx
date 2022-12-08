import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList, incrementIdCount } from "../../store/todoSlice";
import { RootState } from "../../store/store";
import { AddToDoInput } from "../../styles/App.styles";

const TodoInput = () => {
  const dispatch = useDispatch();
  const idCount = useSelector((state: RootState) => state.todo.idCount);
  const [newTodo, setNewTodo] = useState<string>("");

  const addNewTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(incrementIdCount());

    const todo = {
      id: idCount,
      name: newTodo,
      completed: false,
    };

    dispatch(addToList(todo));
    setNewTodo("");
  };

  const toggleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  return (
    <form autoComplete="off" onSubmit={addNewTodo}>
      <AddToDoInput
        className="add-todo-input"
        type="text"
        value={newTodo}
        name="todo"
        placeholder="Create a new todo..."
        onChange={toggleInput}
      />
    </form>
  );
};

export default TodoInput;
