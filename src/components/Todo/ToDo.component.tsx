import "./todo.styles.scss";
import TodoInput from "../TodoInput/TodoInput.component";
import TodoList from "../TodoList/TodoList.component";

function ToDo() {
  return (
    <div className="container">
      <span className="title">TODO</span>
      <TodoInput />
      <TodoList/>
    </div>
  );
}

export default ToDo;
