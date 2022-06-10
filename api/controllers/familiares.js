const familiaresControllers = {};
const Familiares = require("../models/Familiares");
const Homeless = require("../models/Homeless");
familiaresControllers.createFamiliares = (req, res) => {
  Familiares.create(req.body)
    .then((familiares) => res.sendStatus(201))
    .catch((error) => console.log(error));
};

familiaresControllers.deleteFamiliares = (req, res) => {
  Familiares.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

familiaresControllers.findFamiliares = (req, res) => {
  Familiares.findAll({
    include: {
      model: Homeless,
      as: "homeless",
      attributes: ["nombre"],
    },
  }).then((familiares) => res.status(200).send(familiares));
};

familiaresControllers.findoOneFamiliaresId = (req, res) => {
  Familiares.findOne({ where: { id: req.params.id } })
    .then((familiares) => res.send(familiares))
    .catch((error) => console.log(error));
};

familiaresControllers.editFamiliares = (req, res) => {
  Familiares.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  })
    .then(() => res.sendStatus(200))
    .catch((error) => console.log(error));
};

module.exports = familiaresControllers;
