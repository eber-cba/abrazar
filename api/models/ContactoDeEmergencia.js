const { Sequelize } = require("sequelize");
const db = require("../config/index");

class ContactoDeEmergencia extends Sequelize.Model {}

ContactoDeEmergencia.init(
  {
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize: db,
    tableName: "contactoDeEmergencia",
  }
);
module.exports = ContactoDeEmergencia;
