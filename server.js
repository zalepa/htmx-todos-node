const express = require('express');

const server = express();

server.set('view engine', 'pug');

// A dummy model
class Todos {
  static db = [];

  static all() {
    return this.db;
  }

  static seed() {
    this.db.push({ content: 'Learn HTMX'});
    this.db.push({ content: 'Make Money'});
  }
}

Todos.seed();

// GET /todos
server.get('/todos', (req, res) => {
  const todos = Todos.all();
  res.render('todos/index', { todos });
});


module.exports = server;