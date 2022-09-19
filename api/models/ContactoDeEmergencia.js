const { Sequelize } = require("sequelize");
const db = require("../config/index");

class ContactoDeEmergencia extends Sequelize.Model {}

ContactoDeEmergencia.init(
  {
    contacto: {
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
