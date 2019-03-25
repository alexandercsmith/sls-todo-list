const db = require('../db.js');

module.exports.updateTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;

  const body = JSON.parse(event.body);

  db.todo
    .update(body, {
      where: { id: todo_id },
      returning: true
    })
    .then(resArr => {
      const [rowsAffected, todoArr] = resArr;

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todo: todoArr[0]
        })
      })
    });
}
