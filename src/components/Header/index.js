import React from "react";
import "./style.scss";

const Header = (props) => {
  const { filter, setFilter } = props;
  return (
    <div className="todo-header">
      <ul>
        <li>
          <button
            onClick={() => setFilter("all")}
            className={`btn ${filter === "all" ? "selected" : ""}`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("active")}
            className={`btn ${filter === "active" ? "selected" : ""}`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => setFilter("completed")}
            className={`btn ${filter === "completed" ? "selected" : ""}`}
          >
            Completed
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
