/* Copyright (C) 2021 Andrew Freeman
 This file is part of andrews-todo-list.

 andrews-todo-list is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 andrews-todo-list is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

You should have received a copy of the GNU General Public License
*/

import React, { Fragment, useState, useEffect } from "react";
import EditTodo from "./EditTodo";

function ListTodos() {
  //now that data is in the browser as a json, we need to put it in a state so that react can use it

  //default to empty array for this state
  const [todos, setTodos] = useState([]);

  //delete todo function

  async function deleteTodo(id) {
    try {
      //  template mentions, actually called template literals, using backquotes
      //used to make multiline strings and to put variables into fricking text
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      console.log(res);
      //changes the data in realtime by filtering from our todo state all elements in the json
      //that have a todo id equal to the id passed into this function
      //aka, if a thing is deleted from the database, remove it from the state now rather than
      //waiting for another database query to show it no longer present,
      //as the database queries are just represented as the todo state anyways.
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }

  //get todo function

  async function getTodos() {
    const res = await fetch("http://localhost:5000/todos");

    // keep in MSFIDOSignature, we are getting back json data, we need to parse it:
    const todoArray = await res.json(); //to parse the data, add await cause it takes some time to parse

    setTodos(todoArray);
    // console.log(todoArray);
  }

  //what we need to do now is use useeffect to get data with the restful api where we get all the todos

  //useEffect runs every time component is rendered
  //keeps running, makes multiple requests,
  //we add the squarebracket at the end to ensure we only make one request
  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {/* now we map it out inside our table */}
          {/* if we wanna do javascript logic, we have to put it in brackets. */}
          {/* this is why the comments are in brackets */}
          {todos.map((todo) => (
            //   need to add a unique key/identifier when mapping from json
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                {/* pass todo as prop */}
                <EditTodo todo={todo}></EditTodo>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ListTodos;
