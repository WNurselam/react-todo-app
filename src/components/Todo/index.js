import React from "react";
import "./style.scss";
import { useState } from "react";

const Todo = (props) => {
  const { todo, text, setTodos, todos, id } = props;

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    //console.log(todo.id);
    //console.log(todos);
  };

  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <div>
        <li className="todo-item">
          <div
            className={`icon-container ${todo.completed ? "completed" : ""}`}
          >
            <i
              className="fa-sharp fa-solid fa-circle-check"
              onClick={completeTodo}
            ></i>
            <label>{text}</label>
          </div>
          <div className="icon-container">
            <i className="fa-solid fa-trash-can" onClick={deleteTodo}></i>
            {/* <i className="fa-solid fa-pen-to-square"></i> */}
          </div>
        </li>
      </div>
    </div>
  );
};

export default Todo;
