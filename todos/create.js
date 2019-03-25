const db = require('../db.js');

module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);
  const { task } = body;
  if (!task) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: `The Property 'Task' is required.`
      })
    });
  }
  db.todo
    .create({
      task: body.task
    }).then(todo => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todo: todo
        })
      })
    });
}
