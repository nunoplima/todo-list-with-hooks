import React from "react";

const Todo = ({ todo, removeFromTodoArr, markTodoAsDone }) => {
  
  const removeHandler = () => {
    removeFromTodoArr(todo);
  }

  const doneHandler = () => {
    markTodoAsDone(todo);
  }

  return (
    <h3 style={todo.done ? { "text-decoration": "line-through" } : null}>
      {todo.activity}
      <span><button onClick={removeHandler}>X</button></span>
      <span><button onClick={doneHandler}>Done</button></span>
    </h3>
  )
}

export default Todo;