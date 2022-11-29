import React, { useState } from "react";
import "./todo.styles.scss";
import TodoInput from "../TodoInput/TodoInput.component";
import TodoList from "../TodoList/TodoList.component";

function ToDo() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<
    { todo: string; completed: boolean }[]
  >([]);

  const toggleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addNewTodo = (event: any) => {
    event.preventDefault();

    const todo = {
      todo: newTodo,
      completed: false
    }

    setTodoList([todo, ...todoList]);
    event.target.reset();
  };

  return (
    <div className="container">
      <span className="title">TODO</span>
      <TodoInput toggleInput={toggleInput} addNewTodo={addNewTodo} />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default ToDo;
