const { Sequelize } = require("sequelize");
const db = require("../config/database");
const bcrypt = require("bcrypt");

class Homeless extends Sequelize.Model {}

Homeless.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
    },
    edad: {
      type: Sequelize.INTEGER,
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
    ubicacionFrecuente: {
      type: Sequelize.STRING,
    },
    otrasUbicaciones: {
      type: Sequelize.STRING,
    },
    necesidadesUrgentes: {
      type: Sequelize.STRING,
    },
    otrasNecesidades: {
      type: Sequelize.STRING,
    },
    sueños: {
      type: Sequelize.STRING,
    },
    foto: {
      type: Sequelize.STRING,
    },
    familiares: {
      type: Sequelize.INTEGER,
    },
    apodo: {
      type: Sequelize.STRING,
    },
    trabajo: {
      type: Sequelize.STRING,
    },
    educacion: {
      type: Sequelize.STRING,
    },
    apodo: {
      type: Sequelize.STRING,
    },
    problemasDeSalud: {
      type: Sequelize.STRING,
    },
    estadoDeAyuda: {
      type: Sequelize.STRING,
    },
    telefono: {
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
    tableName: "homeless", // We need to choose the model name
  }
);

Homeless.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};
Homeless.beforeCreate((homeless) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      homeless.salt = salt;
      return homeless.hash(homeless.password, salt);
    })
    .then((hash) => {
      homeless.password = hash;
    });
});

module.exports = Homeless;
