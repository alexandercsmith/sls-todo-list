'use strict';

module.exports.read = async (event) => {
  const message = "Hello, world"
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message
    }),
  }
}
