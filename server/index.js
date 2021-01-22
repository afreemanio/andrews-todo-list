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

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// the port to start on
const port = 5000;

//middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body

//ROUTES//

//get all todos
app.get("/todos", async (req, res) => {
  try {
    //pool queries database
    const allTodos = await pool.query("SELECT * FROM todo");
    //res returns all rows from the data
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a todo

//:id is params
app.get("/todos/:id", async (req, res) => {
  // console.log(req.params);
  try {
    //below is called restructuring, look this up?
    const { id } = req.params;
    //ok, so that's how you pass params into SQL,
    //you set a variable with const {whatever} = {whatever},
    // then in sql, you do $1, [whatever/var1, whatever/var2], etc
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.err(error.message);
  }
});

//create a todo
// async allows stuff like try, catch, await, makes easy to organize code
//allowing asynchronous routing, look up more later
app.post("/todos", async (req, res) => {
  try {
    // res.json(req.body);
    const { description } = req.body;
    // returning star returns data back to sender
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    //[0] returns only first json object (id/description)
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo

//ok, so we need the id (in the header, the localhost/todos/whatever) to know where to update
// and we need the description from the body to know what to update it to
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("Delete FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("todo was deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is starting on port " + port);
});
