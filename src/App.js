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
  
  const removeFromTodoArr = (idx) => {
    todoArr.splice(idx, 1);
    setTodo([...todoArr]);
  }

  const markTodoAsDone = (idx) => {
    todoArr[idx].done = !todoArr[idx].done;
    setTodo([...todoArr]);
  }

  return (
    <React.Fragment>
      <ul>
        {todoArr.map((todo, idx) => {
          return (
            <li key={idx}>
              <Todo todo={todo} idx={idx} removeFromTodoArr={removeFromTodoArr} markTodoAsDone={markTodoAsDone} />
            </li>
          )
        })}
      </ul>
      <TodoAdder addToTodoArr={addToTodoArr} />
    </React.Fragment>   
  );
}

export default App;
