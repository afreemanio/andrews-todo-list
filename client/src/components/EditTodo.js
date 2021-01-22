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

const EditTodo = ({ todo }) => {
  // editText function
  const editText = async (id) => {
    try {
      //data passed in from description state
      const body = { description };
      const res = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  // create a state thats gonna use this description,
  // the default for this state is the current todo's description, autofilling it into
  // the button we are looking for
  const [description, setDescription] = useState(todo.description);

  return (
    <Fragment>
      <button
        type="button"
        // className="btn btn-primary"
        className="btn btn-warning"
        data-toggle="modal"
        // dollar sign here cause that's how data target works
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      {/* id = "id21" */}
      <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
            </div>

            <div className="modal-body">
              {/* whenever the text is changed, run setDescription function with the parameter of the target value */}
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              {/* this makes it refresh if you click exit button on the modal, otherwise it would stay as the state */}
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
