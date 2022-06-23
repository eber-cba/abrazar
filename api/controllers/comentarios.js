const Comentarios = require("../models/Comentarios");
const Usuarios = require("../models/Usuarios");
const Notificaciones = require("../models/Notificaciones");

class comentariosControllers {
  static async createComentarios(req, res) {
    try {
      await Comentarios.create(req.body).then((comentarios) =>
        res.sendStatus(201)
      );
    } catch (error) {
      return res.send("credenciales incorrectas", error);
    }
  }
  static async deleteComentarios(req, res, next) {
    try {
      await Comentarios.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (error) {
      return next(error);
    }
  }
  static async editComentarios(req, res, next) {
    try {
      await Comentarios.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      }).then(() => res.sendStatus(200));
    } catch (error) {
      return next(error);
    }
  } 

  static async findComentarios(req, res, next) {
    try {
      Comentarios.findAll({
        include: [
          {
            model: Usuarios,
            as: "usuarios",
            attributes: ["nombre"],
          },
          {
            model: Notificaciones,
            as: "notificacion",
          },
        ],
      }).then((comentarios) => res.status(200).send(comentarios));
    } catch (error) {
      return next(error);
    }
  }
  static async findoOneComentariosId(req, res, next) {
    try {
      Comentarios.findOne({ where: { id: req.params.id } }).then(
        (comentarios) => res.send(comentarios)
      );
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = comentariosControllers;
