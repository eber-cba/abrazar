const Usuarios = require("../models/Usuarios.js");
const Homeless = require("../models/Homeless.js");
const Comentarios = require("../models/Comentarios.js");

class usuariosControllers {
  static async createUsuarios(req, res) {
    try {
      const newUser = await Usuarios.create(req.body);
      res.status(201).json(newUser);
    } catch {
      return res.send("credenciales incorrectas");
    }
  }

  static async login(req, res, next) {
    res.json(req.user);
  }
  static async logout(req, res, next) {
    req.logOut();
    res.sendStatus(200);
  }
  static async getLogged(req, res, next) {
    if (req.user) {
      req.user = await Usuarios.findOne({ id: req.user._id });
      return res.send(req.user);
    } else return res.sendStatus(401);
  }

  static async deleteUsuarios(req, res, next) {
    try {
      Usuarios.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (err) {
      return next(err);
    }
  }
  static async findUsuarios(req, res, next) {
    try {
      await Usuarios.findAll({
        include: [
          {
            model: Homeless,
            as: "homeless",
          },
          {
            model: Comentarios,
            as: "comentario",
          },
        ],
      }).then((usuarios) => res.status(200).send(usuarios));
    } catch (err) {
      return next(err);
    }
  }
  static async findoOneUsuariosId(req, res, next) {
    try {
      const user = await Usuarios.findOne({ where: { id: req.params.id } });
      return res.send(user);
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = usuariosControllers;
