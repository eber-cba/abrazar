const { Sequelize } = require("sequelize");
const db = require("../config/");
class Vinculaciones extends Sequelize.Model {}

Vinculaciones.init(
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
    barrio:{
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

  },
  {
    sequelize: db,
    tableName: "Vinculaciones", // We need to choose the model name
  }
);

 

module.exports = Vinculaciones;
