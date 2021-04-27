var Sequelize = require('sequelize');

const database = new Sequelize(
  'tutofox', //name database
  'admin', //user database
  'Mn2020sm#', //password database
  {
    host: 'localhost',
    dialect: "mysql"
  }
);

database.sync()

module.exports = database;
