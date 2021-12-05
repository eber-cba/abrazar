const { Sequelize } = require("sequelize");
const db = require("../config/database");
const bcrypt = require("bcrypt");

class Familiares extends Sequelize.Model {}

Familiares.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    nacionalidad: {
      type: Sequelize.STRING,
    },
    provincia: {
      type: Sequelize.STRING,
    },
    localidad: {
      type: Sequelize.STRING,
    },
    ubicacionActual: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
    tipoDeRelacion: {
      type: Sequelize.STRING,
    },
    edad: {
      type: Sequelize.INTEGER,
    },
    datoExtra: {
      type: Sequelize.STRING,
    },

    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    tableName: "familiares", // We need to choose the model name
  }
);

Familiares.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};
Familiares.beforeCreate((familiares) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      familiares.salt = salt;
      return familiares.hash(familiares.password, salt);
    })
    .then((hash) => {
      familiares.password = hash;
    });
});

module.exports = Familiares;
