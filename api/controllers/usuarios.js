const usuariosControllers = {};
const Usuarios = require("../models/Usuarios.js")


usuariosControllers.createUsuarios = (req, res) => {
    Usuarios.create(req.body)
      .then((usuarios) => res.sendStatus(201))
      .catch((error) => console.log(error));
  };
  usuariosControllers.findUsuarios = (req, res) => {
    Usuarios.findAll().then((usuarios) => res.status(200).send(usuarios));
  };

  usuariosControllers.deleteUsuarios = (req, res) => {
    Usuarios.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error));
  };

  module.exports = usuariosControllers;
