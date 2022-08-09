const express = require("express");
const router = express.Router();
const passport = require("passport");

const usuariosControllers = require("../controllers/usuarios");

router.post("/register", usuariosControllers.createUsuarios);
router.post("/login",passport.authenticate("local"),usuariosControllers.login);
router.get("/me", usuariosControllers.afterLogin); //para la persistencia de usuario
router.post("/logout", usuariosControllers.logout);
router.get("/", usuariosControllers.findUsuarios);
router.get("/:id", usuariosControllers.findoOneUsuariosId);
router.delete("/:id", usuariosControllers.deleteUsuarios);

module.exports = router;
