const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuarios");

router.post("/", usuariosControllers.createUsuarios);
router.get("/", usuariosControllers.findUsuarios);

router.delete("/:id", usuariosControllers.deleteUsuarios);

module.exports = router;
