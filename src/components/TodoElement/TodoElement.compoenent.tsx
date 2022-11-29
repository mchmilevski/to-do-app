import React, { useState } from "react";
import "./todoElement.styles.scss";

interface TodoElement {
  element: { todo: string; completed: boolean };
}

function TodoElement({ element }: TodoElement) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="to-do-element">
      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <span className={`item-text ${isChecked ? "text-line-through" : ""}`}>
        {element.todo}
      </span>
    </div>
  );
}

export default TodoElement;
