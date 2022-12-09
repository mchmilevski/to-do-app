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
  TodoForm,
} from "./todoRow.styles";
import { DraggableProvided } from "react-beautiful-dnd";

const removeIconStyle = {
  cursor: "pointer",
  color: "hsl(234, 11%, 52%)",
};

interface TodoItemInterface {
  todo: ToDoItem;
  innerRef: any;
  provided: DraggableProvided;
}

const TodoRow: React.FC<TodoItemInterface> = ({ todo, provided, innerRef }) => {
  const [changedTextToInput, setChangeTextToInput] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.name || "");
  const dispatch = useDispatch();

  const setIsChecked = () => {
    dispatch(toggleTodo(todo));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const editData = {
      ...todo,
      newName: editedTodo,
    };

    dispatch(editTodo(editData));
    setChangeTextToInput(!changedTextToInput);
  };

  const toggleRemoveTodo = () => {
    dispatch(removeTodo(todo));
    setChangeTextToInput(!changedTextToInput);
  };

  return (
    <ToDoContainer
      ref={innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={setIsChecked}
      />
      {changedTextToInput ? (
        <InputAndRemoveContainer
          onClick={() => setChangeTextToInput(!changedTextToInput)}
        >
          <TodoForm onSubmit={handleSubmit}>
            <EditInput
              completed={todo.completed}
              autoFocus={true}
              type="text"
              value={editedTodo}
              name="todo"
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          </TodoForm>
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
};

export default TodoRow;
