const ContactoDeEmergencia = require("../models/ContactoDeEmergencia");
const Homeless = require("../models/Homeless");

class contactoDeEmergenciaControllers {
  static async createContacto(req, res) {
    try {
      await ContactoDeEmergencia.create(req.body).then((contactoDeEmergencia) =>
        res.sendStatus(201)
      );
    } catch (error) {
      return res.send("credenciales incorrectas", error);
    }
  }
  static async deleteContacto(req, res, next) {
    try {
      await ContactoDeEmergencia.destroy({ where: { id: req.params.id } }).then(
        () => res.sendStatus(200)
      );
    } catch (error) {
      return next(error);
    }
  }
  static async editContacto(req, res, next) {
    try {
      await ContactoDeEmergencia.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }).then(() => res.sendStatus(200));
    } catch (error) {
      return next(error);
    }
  }
  static async findContacto(req, res, next) {
    try {
      await ContactoDeEmergencia.findAll({
        include: {
          model: Homeless,
          as: "homeless",
          attributes: ["nombre"],
        },
      }).then((direcciones) => res.status(200).send(direcciones));
    } catch (error) {
      return next(error);
    }
  }
}
module.exports = contactoDeEmergenciaControllers;
