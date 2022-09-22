const { Sequelize } = require("sequelize");
const db = require("../config/index");

class Followers extends Sequelize.Model {}

Followers.init(
  {
    seguir: {
      type: Sequelize.BOOLEAN,
      defaultValue: 1,
    },
  },
  {
    sequelize: db,
    tableName: "followers",
  }
);
module.exports = Followers;

/**
 * En esta tabla deberia guardarse:
 * el id del user quien lo creo /me parece
 * el id del user que va a seguir
 * el id del homeless
 * el id de comentarios
 */