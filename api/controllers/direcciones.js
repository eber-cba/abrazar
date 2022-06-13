const direccionesControllers = {};
const Direcciones = require("../models/Direcciones");
const Homeless = require("../models/Homeless")
direccionesControllers.createDirecciones = (req, res) => {
    Direcciones.create(req.body)
      .then((direcciones) => res.sendStatus(201))
      .catch((error) => console.log(error));
  };
  
  direccionesControllers.deleteDirecciones = (req, res) => {
    Direcciones.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error));
  };

  direccionesControllers.editDirecciones = (req, res) => {
    Direcciones.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    })
      .then(() => res.sendStatus(200))
      .catch((error) => console.log(error));
  };

  direccionesControllers.findDirecciones = (req, res) => {
    Direcciones.findAll({
      include: {
        model: Homeless,
        as: "homeless",
        attributes: ["nombre"],
      },
    }).then((direcciones) => res.status(200).send(direcciones));
  };

  direccionesControllers.findoOneDireccionesId = (req, res) => {
    Direcciones.findOne({ where: { id: req.params.id } })
      .then((direcciones) => res.send(direcciones))
      .catch((error) => console.log(error));
  };
  module.exports = direccionesControllers;
