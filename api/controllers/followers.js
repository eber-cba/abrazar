const Followers = require("../models/Followers");
const Usuarios = require("../models/Usuarios");
const Homeless = require("../models/Homeless.js");

class followersControllers {
  static async createFollowers(req, res) {
    try {
      const newFollower = await Followers.create(req.body);
      res.status(201).json(newFollower);
    } catch {
      return res.send("follower incorrecto");
    }
  }

  static async deleteFollowers(req, res, next) {
    try {
      Followers.destroy({ where: { id: req.params.id } }).then(() =>
        res.sendStatus(200)
      );
    } catch (err) {
      return next(err);
    }
  }

  static async findFollowers(req, res, next) {
    try {
      await Followers.findAll({
        include: [
          {
            model: Usuarios,
            as: "usuarios",
            attributes: ["name"],
          },
          {
            model:Homeless,
            as:"homeless",
            attributes: ["nombre"],
          }
        ],
      }).then((followers) => res.status(200).send(followers));
    } catch (err) {
      return next(err);
    }
  }
  static async findoOneFollowers(req, res, next) {
    try {
      const user = await Followers.findOne({ where: { id: req.params.id } });
      return res.send(user);
    } catch (err) {
      return next(err);
    }
  }
}
module.exports = followersControllers;
