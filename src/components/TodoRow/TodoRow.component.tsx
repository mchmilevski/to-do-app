import { useState } from "react";
import "./todoRow.styles.scss";
import { toggleTodo, editTodo, removeTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import { ToDoItem } from "../../store/todoSlice";
import { FaTimes } from "react-icons/fa";

interface TodoItemInterface {
  todo: ToDoItem;
}

function TodoRow({ todo }: TodoItemInterface) {
  const [changedTextToInput, setChangeTextToInput] = useState<boolean>(false);
  const [editedTodo, setEditedTodo] = useState<string>(todo.name || "");
  const dispatch = useDispatch();

  const setIsChecked = () => {
    dispatch(toggleTodo(todo.name));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const editData = {
      name: todo.name,
      newName: editedTodo,
    };

    dispatch(editTodo(editData));
    setChangeTextToInput(!changedTextToInput);
  };

  const toggleRemoveTodo = () => {
    dispatch(removeTodo(todo.name));
    setChangeTextToInput(!changedTextToInput);
  };

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        className={`${todo.completed ? "checked" : ""}`}
        onChange={setIsChecked}
      />
      {changedTextToInput ? (
        <div
          className="input-and-remove"
          onClick={() => setChangeTextToInput(!changedTextToInput)}
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              autoFocus={true}
              className="edit-input"
              type="text"
              value={editedTodo}
              name="todo"
              onChange={(e) => setEditedTodo(e.target.value)}
            />
          </form>
          <div onClick={toggleRemoveTodo}>
            <FaTimes className="remove-icon" />
          </div>
        </div>
      ) : (
        <span
          onClick={() => setChangeTextToInput(!changedTextToInput)}
          className={`item-text ${todo.completed ? "text-line-through" : ""}`}
        >
          {todo.name}
        </span>
      )}
    </div>
  );
}

export default TodoRow;
