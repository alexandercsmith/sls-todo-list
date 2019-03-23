const Sequelize = require('sequelize');

const sequelize = new Sequelize('db-url');

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
}

db.sequelize.sync();

module.exports = db;
