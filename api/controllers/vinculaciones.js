const vinculacionesControllers = {};
const Vinculaciones = require("../models/Vinculaciones");
const Homeless = require("../models/Homeless");

vinculacionesControllers.createVinculaciones = (req, res) => {
  Vinculaciones.create(req.body)
    .then((vinculaciones) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

vinculacionesControllers.deleteVinculaciones = (req, res) => {
  Vinculaciones.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

vinculacionesControllers.findVinculaciones = (req, res) => {
  Vinculaciones.findAll({
    include: {
      model: Homeless,
      as: "homeless",
      attributes: ["nombre"],
    },
  }).then((vinculaciones) => res.status(200).send(vinculaciones));
};

vinculacionesControllers.findoOneVinculacionesId = (req, res) => {
  Vinculaciones.findOne({ where: { id: req.params.id } })
    .then((vinculaciones) => res.send(vinculaciones))
    .catch((error) => console.log(error));
};

vinculacionesControllers.editVinculaciones = (req, res) => {
  Vinculaciones.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = vinculacionesControllers;
