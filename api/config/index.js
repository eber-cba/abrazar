const Sequelize = require("sequelize");

const db = new Sequelize("abrazar", "Eber", null, {
  host: "localhost",
  dialect: "postgres",
  user:"Eber"
 
 });

module.exports = db;
