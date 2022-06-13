const comentariosControllers = {};
const Comentarios = require("../models/Comentarios");
const Usuarios = require("../models/Usuarios");
const Notificaciones = require("../models/Notificaciones");
comentariosControllers.createComentarios = (req, res) => {
  Comentarios.create(req.body)
    .then((comentarios) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

comentariosControllers.deleteComentarios = (req, res) => {
  Comentarios.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

comentariosControllers.editComentarios = (req, res) => {
  Comentarios.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

comentariosControllers.findComentarios = (req, res) => {
  Comentarios.findAll({
    include: [
      {
        model: Usuarios,
        as: "usuarios",
        attributes: ["nombre"],
      },
      {
        model:Notificaciones,
        as:"notificacion"
      },
    ],
  }).then((comentarios) => res.status(200).send(comentarios));
};

comentariosControllers.findoOneComentariosId = (req, res) => {
  Comentarios.findOne({ where: { id: req.params.id } })
    .then((comentarios) => res.send(comentarios))
    .catch((error) => console.log(error));
};
module.exports = comentariosControllers;
