const { Sequelize } = require("sequelize");
const db = require("../config");
const bcrypt = require("bcrypt");

class Usuarios extends Sequelize.Model {}

Usuarios.init(
  {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    tableName: "usuarios", // We need to choose the model name
  }
);

Usuarios.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};
Usuarios.beforeCreate((user) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = Usuarios;
