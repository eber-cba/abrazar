const Sequelize = require("sequelize");

const db = new Sequelize("abrazar", null, null, {
  host: "localhost",
  dialect: "postgres",
 
});

module.exports = db;
