const express = require("express");
const router = express.Router();
const usuarios = require("./usuarios");
const homeless = require("./homeless");
const vinculaciones = require("./vinculaciones");
const direcciones = require("./direcciones");
const comentarios = require("./comentarios");
const notificaciones = require("./notificaciones");
const regiones = require("./regiones")
const contactoDeEmergencia = require("./contactoDeEmergencia")

router.use("/usuarios", usuarios);
router.use("/homeless", homeless);
router.use("/vinculaciones", vinculaciones);
router.use("/direcciones", direcciones);
router.use("/comentarios", comentarios);
router.use("/notificaciones", notificaciones);
router.use("/regiones", regiones);
router.use("/contactoDeEmergencia", contactoDeEmergencia);


module.exports = router;
