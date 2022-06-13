const { Sequelize } = require("sequelize");
const db = require("../config/index");

class Comentarios extends Sequelize.Model {}

Comentarios.init(
  {
    post: {
      type: Sequelize.STRING,
      
    },
  },
  {
    sequelize: db,
    tableName: "comentarios",
  }
);
module.exports = Comentarios;
