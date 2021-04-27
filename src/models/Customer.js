//import sequelize
var Sequelize = require('sequelize');
// importing connectios database
var database = require('./database');

var Customers = database.define('customers',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT
});

module.exports = Customers;
