import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter,setFilter] = useState("all");

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <Header filter={filter} setFilter={setFilter}/>
      <TodoList todos={todos} setTodos={setTodos} filter={filter}/>   
      <ToastContainer autoClose={1000}/>
    </div>
  );
}

export default App;
