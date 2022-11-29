import React, { useState } from "react";

interface InputProps {
  toggleInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
  addNewTodo: (e:any) => void
}

function TodoInput({ toggleInput, addNewTodo }: InputProps) {
  return (
    <form onSubmit={(e) => addNewTodo(e)}>
      <input
        className="input"
        type="text"
        name="todo"
        placeholder="Create a new todo..."
        onChange={(e) => toggleInput(e)}
      />
    </form>
  );
}

export default TodoInput;
