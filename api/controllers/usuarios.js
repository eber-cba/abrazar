const usuariosControllers = {};
const Usuarios = require("../models/Usuarios.js");
const Homeless = require("../models/Homeless.js");
const Comentarios = require("../models/Comentarios.js");

usuariosControllers.createUsuarios = (req, res) => {
  Usuarios.create(req.body)
    .then((usuarios) => res.sendStatus(201))
    .catch((error) => console.log(error));
};
usuariosControllers.findUsuarios = (req, res) => {
  Usuarios.findAll({
    include: [
      {
        model: Homeless,
        as: "homeless",
      },
      {
        model: Comentarios,
        as: "comentario",
      },
    ],
  }).then((usuarios) => res.status(200).send(usuarios));
};

usuariosControllers.findoOneUsuariosId = (req, res) => {
  Usuarios.findOne({ where: { id: req.params.id } })
    .then((usuarios) => res.send(usuarios))
    .catch((error) => console.log(error));
};

usuariosControllers.deleteUsuarios = (req, res) => {
  Usuarios.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = usuariosControllers;
