const express = require("express");
const router = express.Router();
const usuariosControllers = require("../controllers/usuarios");

router.post("/", usuariosControllers.createUsuarios);
router.get("/", usuariosControllers.findUsuarios);
router.get("/:id",usuariosControllers.findoOneUsuariosId)
router.delete("/:id", usuariosControllers.deleteUsuarios);

module.exports = router;
