import React from "react";
import "./style.scss";

const Todo = (props) => {
  const { todo, text,setTodos,todos,id } = props;

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id)); 
    //console.log(todos); 
  };



   
  return (
  <div className="todo">
    <div>
      <li className="todo-item">
        <div className="icon-container">
        <i className="fa-sharp fa-solid fa-circle-check"></i>
          <label>
            {text}
          </label>
        </div>
        <div className="icon-container">
        <i className="fa-solid fa-trash-can" onClick={deleteTodo}></i>
        <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </li>
    </div>
  </div>
  );
};

export default Todo;
