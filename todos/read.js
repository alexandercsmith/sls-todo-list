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
