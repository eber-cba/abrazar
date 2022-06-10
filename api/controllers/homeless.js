const homelessControllers = {};
const Homeless = require("../models/Homeless.js")
const Familiares = require("../models/Familiares")

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
    Homeless.findAll(
      {
        include:{
          model:Familiares,
          as:"familiars",
          attributes:["nombre","edad"]
          
        }

      }
    ).then((homeless) => res.status(200).send(homeless));
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
