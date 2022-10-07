import React from "react";
import "./style.scss";
import Todo from "../Todo";

let filtered = null;
const TodoList = (props) => {
  const { todos, setTodos, filter } = props;
  //console.log(todos);

  filtered = todos;

  if (filter !== "all") {
    filtered = todos.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }
  return (
    <div className="todo-container">
      {filtered.map((todo) => (
        <Todo
          key={todo.id}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default TodoList;
