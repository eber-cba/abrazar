const notificacionesControllers = {};
const Notificaciones = require("../models/Notificaciones");
const Comentarios = require("../models/Comentarios")

notificacionesControllers.createNotificaciones = (req, res) => {
    Notificaciones.create(req.body)
      .then((notificaciones) => res.sendStatus(201))
      .catch((error) => console.log(error));
  };
  
  notificacionesControllers.deleteNotificaciones = (req, res) => {
    Notificaciones.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error));
  };

  
  notificacionesControllers.findNotificaciones = (req, res) => {
    Notificaciones.findAll({
      include: {
        model: Comentarios,
        as: "comentario",
        attributes: ["post"],
      },
    }).then((notificaciones) => res.status(200).send(notificaciones));
  };

  notificacionesControllers.findoOneNotificacionesId = (req, res) => {
    Notificaciones.findOne({ where: { id: req.params.id } })
      .then((notificaciones) => res.send(notificaciones))
      .catch((error) => console.log(error));
  };
  module.exports = notificacionesControllers;
