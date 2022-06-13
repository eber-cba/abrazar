const { Sequelize } = require("sequelize");
const db = require("../config/index");

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
    genero: {
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

    necesidadesUrgentes: {
      type: Sequelize.STRING,//array
    },
    otrasNecesidades: {
      type: Sequelize.STRING,//array
    },
    sueños: {
      type: Sequelize.STRING,
    },
    fotos: {
      type: Sequelize.STRING,//array - hasta 3 fotos
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
    problemasDeSalud: {
      type: Sequelize.STRING, //array
    },
    medicamentos: {
      type: Sequelize.STRING, //array
    },
    situacion: {
      type: Sequelize.STRING,
    },
    telefono: {
      type: Sequelize.INTEGER,
    },
    datoExtra: {
      type: Sequelize.STRING,
    },
    contactoDeEmergencia: {
      type: Sequelize.INTEGER,
    },
  },
  {
    sequelize: db,
    tableName: "homeless", // We need to choose the model name
  }
);

module.exports = Homeless;
