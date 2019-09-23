import React, { useState } from 'react';
import Todo from "./components/Todo";
import TodoAdder from "./components/TodoAdder";

function App() {
  const [ todoArr, setTodo ] = useState([
    {
      activity: "Work for a bit :(",
      done: false
    },
    {
      activity: "Train hard :)",
      done: false
    },
  ])

  const addToTodoArr = (activity) => {
    const todo = {
      activity: activity,
      done: false
    }
    setTodo([...todoArr, todo]);
  }
  
  const removeFromTodoArr = (todo) => {
    const todoIdx = todoArr.findIndex(each => each === todo);
    todoArr.splice(todoIdx, 1);
    setTodo([...todoArr]);
  }

  const markTodoAsDone = (todo) => {
    const todoIdx = todoArr.findIndex(each => each === todo);
    todoArr[todoIdx].done = !todoArr[todoIdx].done;
    setTodo([...todoArr]);
  }

  return (
    <React.Fragment>
      <ul>
        {todoArr.map((todo, idx) => {
          return (
            <li key={idx}>
              <Todo todo={todo} removeFromTodoArr={removeFromTodoArr} markTodoAsDone={markTodoAsDone} />
            </li>
          )
        })}
      </ul>
      <TodoAdder addToTodoArr={addToTodoArr} />
    </React.Fragment>   
  );
}

export default App;
