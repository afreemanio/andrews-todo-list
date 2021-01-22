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

import React, { Fragment, useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

  //when the form is submitted
  const onSubmitForm = async (e) => {
    //prevent the default action (in this case, refreshing the page)
    e.preventDefault();
    try {
      //this is what we will be sending to the backend
      // const text = {description};
      const body = { description };

      //ok, so, then we take the state which we have updated
      //run an await http fetch request
      //of method post
      //of header content-type = application/json
      //with data of body (our state)
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      //   console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  //if we write something, it puts it inside the state
  console.log(description);
  return (
    <Fragment>
      <h1 className="text-center my-5">Andrew's Todo List App</h1>
      <h2 className="text-center my-5">Make sure you don't forget it!</h2>
      <form action="" className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Make a pull request for Andrew's Todo List App"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
