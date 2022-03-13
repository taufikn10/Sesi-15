import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 10)));
  });

  if (!localStorage.getItem("login")) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <h1>Todo List</h1>
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead className="table-dark ">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th>{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.completed ? "v" : "x"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
