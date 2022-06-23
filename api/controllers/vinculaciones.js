const Vinculaciones = require("../models/Vinculaciones");
const Homeless = require("../models/Homeless");

class vinculacionesControllers {
  static async createVinculaciones(req, res) {
    try {
      const newVinculo = await Vinculaciones.create(req.body);
      res.status(201).json(newVinculo);
    } catch (error) {
      return res.send("credenciales incorrectas");
    }
  }
  static async deleteVinculaciones(req, res, next) {
    try {
      await Vinculaciones.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (error) {
      return next(err);
    }
  }
  static async findVinculaciones(req, res, next) {
    try {
      await Vinculaciones.findAll({
        include: {
          model: Homeless,
          as: "homeless",
          attributes: ["nombre"],
        },
      }).then((vinculaciones) => res.status(200).send(vinculaciones));
    } catch (error) {
      return next(err);
    }
  }
  static async findoOneVinculacionesId(req, res, next) {
    try {
      await Vinculaciones.findOne({ where: { id: req.params.id } }).then(
        (vinculaciones) => res.send(vinculaciones)
      );
    } catch (error) {
      return next(err);
    }
  }
  static async editVinculaciones(req, res, next) {
    try {
      await Vinculaciones.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      })
        .then(() => res.sendStatus(200))
        .catch((error) => console.log(error));
    } catch (error) {}
  }
}

module.exports = vinculacionesControllers;
