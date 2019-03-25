const db = require('../db.js');

module.exports.getTodo = async (event, context, callback) => {
  const todo = "Make Dinner"
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      todo: todo
    })
  }
  callback(null, response)
}

module.exports.listTodos = async (event, context, callback) => {
  db.todo.findAll({
    attributes: ['id', 'task', 'completed']
  }).then(todos => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        todos: todos
      })
    }
  });
  callback(null, response)
}
