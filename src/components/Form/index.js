import React from "react";
import "./style.scss";
import { useState } from "react";
import { toast } from "react-toastify";
//import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { todos, setTodos } = props;
  const [inputValue, setInputValue] = useState("");

  //console.log(todos);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      toast.error("Please enter a task");
      return false;
    } else {
      setTodos([
        ...todos,
        { text: inputValue, completed: false, id: Math.random() },
      ]);
      setInputValue("");
      toast.success("New task added");
    }
  };
  return (
    <div className="todo-container">
      <h2>TODO LİST</h2>
      <form onSubmit={submitTodo}>
        <div className="inputField">
          <input
            type="text"
            placeholder="Enter a new task"
            value={inputValue}
            onChange={inputChange}
          />
          <button>
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
