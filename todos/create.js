module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const mockDb = body.todo + ' is now saved to the Database.';

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      todo: mockDb
    })
  })
}
