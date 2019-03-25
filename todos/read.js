const db = require('../db.js');

module.exports.getTodo = async (event, context, callback) => {
  const todo_id = event.pathParameters.id;
  db.todo
    .findOne({
      where: { id: todo_id },
      attributes: ['id', 'task', 'completed']
    })
    .then(todo => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          todo: todo
        })
      }
      callback(null, response)
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `Error Fetching Todo -- ID: ${todo_id}`
        })
      })
    })
}

module.exports.listTodos = async (event, context, callback) => {
  db.todo
    .findAll({
      attributes: ['id', 'task', 'completed']
    })
    .then(todos => {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          todos: todos
        })
      }
      callback(null, response);
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `Error Fetching Todos`
        })
      })
    })
}
