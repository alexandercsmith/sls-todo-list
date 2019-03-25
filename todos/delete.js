const db = require('../db.js');

module.exports.deleteTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;

  db.todo
    .destroy({
      where: { id: todo_id }
    })
    .then(deletedTodos => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todos_deleted_count: deletedTodos
        })
      })
    })
    .catch(error => {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          error: `Error Deleting Todo -- ID: ${todo_id}`
        })
      })
    })
}
