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

import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
      </div>
    </Fragment>
  );
}

export default App;
