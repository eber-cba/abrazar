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
      type: Sequelize.STRING,
    },
    medicamentos: {
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
   
  },
  {
    sequelize: db,
    tableName: "homeless", // We need to choose the model name
  }
);

module.exports = Homeless;
