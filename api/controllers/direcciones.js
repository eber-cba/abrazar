const Direcciones = require("../models/Direcciones");
const Homeless = require("../models/Homeless");

class direccionesControllers {
  static async createDirecciones(req, res) {
    try {
      await Direcciones.create(req.body).then((direcciones) =>
        res.sendStatus(201)
      );
    } catch (error) {
      return res.send("credenciales incorrectas", error);
    }
  }
  static async deleteDirecciones(req, res, next) {
    try {
      await Direcciones.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (error) {
      return next(error);
    }
  }
  static async editDirecciones(req, res, next) {
    try {
      await Direcciones.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }).then(() => res.sendStatus(200));
    } catch (error) {
      return next(error);
    }
  }
  static async findDirecciones(req, res, next) {
    try {
      await Direcciones.findAll({
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
  static async findoOneDireccionesId(req, res, next) {
    try {
      Direcciones.findOne({ where: { id: req.params.id } }).then(
        (direcciones) => res.send(direcciones)
      );
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = direccionesControllers;
