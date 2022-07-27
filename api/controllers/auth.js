const { Usuarios } = require("../models/Usuarios");

class AuthController {
  static async newUser(req, res) {
    try {
      const newUser = await Usuarios.create(req.body);
      res.status(201).json(newUser);
    } catch {
      return res.send("credenciales incorrectas");
    }
  }
  // static createUser(req, res) {
  //   Usuarios.create({
  //     name: req.body.name,  
  //     email: req.body.email,
  //     password: req.body.password,
  //   })
  //     .then((newUser) => res.status(201).send(newUser))
  //     .catch((err) => console.log(err));
  // }
  static login(req, res) {
    res.send(req.user);
  }

  static afterLogin(req, res) {
    if (!req.user) return res.sendStatus(401);
    res.send(req.user);
  }

  static logout(req, res) {
    req.logout();
    res.status(200).send({});
  }
}

module.exports = AuthController;
