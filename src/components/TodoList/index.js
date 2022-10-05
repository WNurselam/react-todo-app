import React from "react";
import "./style.scss";
import Todo from "../Todo";

const TodoList = (props) => {

  const {todos,setTodos} = props;
  //console.log(todos);
  return (
    <div className="todo-container"> 
     {
      todos.map((todo) => (
        <Todo 
        key={todo.id}
        text={todo.text}
        todos={todos}
        setTodos={setTodos}     
        />
      ))
     }
    </div>
  );
};

export default TodoList;
