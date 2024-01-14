const Homeless = require("../models/Homeless.js");
const Vinculaciones = require("../models/Vinculaciones");
const Direcciones = require("../models/Direcciones");
const Usuarios = require("../models/Usuarios.js");
const ContactoDeEmergencia = require("../models/ContactoDeEmergencia.js");

class homelessControllers {
  static async createHomeless(req, res) {
    try {
      console.log("back bodi", req.body);
      const { usuariosId, ...rest } = req.body; // Desestructura usuariosID y el resto de los datos
      console.log("usuariosId: =>>>>>", usuariosId);
      console.log("rest:=>>>>>", rest);
      const newHomeless = await Homeless.create({ ...rest, usuariosId }); // Asigna usuariosID al crear el nuevo objeto Homeless
      console.log("Nuevo Homeless:=>>>", newHomeless);
      res.status(201).json(newHomeless);
    } catch (error) {
      return res.status(400).send("credenciales incorrectas: " + error.message);
    }
  }
  static async deleteHomeless(req, res, next) {
    try {
      await Homeless.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (error) {
      return next(error);
    }
  }
  static async findHomeless(req, res, next) {
    try {
      await Homeless.findAll({
        include: [
          {
            model: Vinculaciones,
            as: "vinculacion",
            attributes: ["nombre", "edad", "tipoDeRelacion"],
          },
          {
            model: Direcciones,
            as: "direccion",
            attributes: ["nombre", "deHora", "hastaHora"],
          },
          {
            model: ContactoDeEmergencia,
            as: "contactDeEmergencia",
            attributes: ["tipo", "telefono", "nombre"],
          },
          {
            model: Usuarios,
            as: "usuarios",
            attributes: ["name"],
          },
        ],
      }).then((homeless) => res.status(200).send(homeless));
    } catch (error) {
      return next(error);
    }
  }
  static async findoOneHomelessId(req, res, next) {
    try {
      await Homeless.findOne({ where: { id: req.params.id } }).then(
        (homeless) => res.send(homeless)
      );
    } catch (error) {
      return next(error);
    }
  }
  static async editHomeless(req, res, next) {
    try {
      Homeless.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }).then(() => res.sendStatus(200));
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = homelessControllers;
