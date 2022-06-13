const homelessControllers = {};
const Homeless = require("../models/Homeless.js");
const Vinculaciones = require("../models/Vinculaciones");
const Direcciones = require("../models/Direcciones");
const Usuarios = require("../models/Usuarios.js");

homelessControllers.createHomeless = (req, res) => {
  Homeless.create(req.body)
    .then((homeless) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

homelessControllers.deleteHomeless = (req, res) => {
  Homeless.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

homelessControllers.findHomeless = (req, res) => {
  Homeless.findAll({
    include: [
      {
        model: Vinculaciones,
        as: "vinculacion",
        attributes: ["nombre", "edad"],
      },
      {
        model: Direcciones,
        as: "direccion",
        attributes: ["nombre", "deHora", "hastaHora"],
      },
      {
        model: Usuarios,
        as: "usuarios",
        attributes: ["nombre"],
      },
    ],
  }).then((homeless) => res.status(200).send(homeless));
};

homelessControllers.findoOneHomelessId = (req, res) => {
  Homeless.findOne({ where: { id: req.params.id } })
    .then((homeless) => res.send(homeless))
    .catch((error) => console.log(error));
};

homelessControllers.editHomeless = (req, res) => {
  Homeless.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = homelessControllers;
