import { useState, FormEvent } from "react";
import "./todoRow.styles.tsx";
import { toggleTodo, editTodo, removeTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { ToDoItem } from "../../store/todoSlice";
import { FaTimes } from "react-icons/fa";
import {
  ToDoContainer,
  Checkbox,
  InputAndRemoveContainer,
  ToDoText,
  EditInput,
} from "./todoRow.styles";

const removeIconStyle = {
  cursor: "pointer",
  color: "hsl(234, 11%, 52%)",
};

interface TodoItemInterface {
  todo: ToDoItem;
}

function TodoRow({ todo }: TodoItemInterface) {
  const [changedTextToInput, setChangeTextToInput] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.name || "");
  const dispatch = useDispatch();

  const setIsChecked = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editData = {
      id: todo.id,
      newName: editedTodo,
    };

    dispatch(editTodo(editData));
    setChangeTextToInput(!changedTextToInput);
  };

  const toggleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
    setChangeTextToInput(!changedTextToInput);
  };

  return (
    <ToDoContainer>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={setIsChecked}
      />
      {changedTextToInput ? (
        <InputAndRemoveContainer
          onClick={() => setChangeTextToInput(!changedTextToInput)}
        >
          <form onSubmit={handleSubmit}>
            <EditInput
              completed={todo.completed}
              autoFocus={true}
              type="text"
              value={editedTodo}
              name="todo"
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          </form>
          <FaTimes onClick={toggleRemoveTodo} style={removeIconStyle} />
        </InputAndRemoveContainer>
      ) : (
        <ToDoText
          onClick={() => setChangeTextToInput(!changedTextToInput)}
          completed={todo.completed}
        >
          {todo.name}
        </ToDoText>
      )}
    </ToDoContainer>
  );
}

export default TodoRow;
