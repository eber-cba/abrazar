const { Sequelize } = require("sequelize");
const db = require("../config/index");

class Direcciones extends Sequelize.Model {}

Direcciones.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deHora: {
      type: Sequelize.INTEGER,
    },
    hastaHora: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize: db,
    tableName: "direcciones", 
  }
);
module.exports = Direcciones;