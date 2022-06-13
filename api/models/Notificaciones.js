const { Sequelize } = require("sequelize");
const db = require("../config/index");

class Notificaciones extends Sequelize.Model {}

Notificaciones.init(
  {
    numero: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    tableName: "notificaciones",
  }
);
module.exports = Notificaciones;
