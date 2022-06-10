const express = require("express");
const router = express.Router();
const usuarios = require("./usuarios");
const homeless = require("./homeless")
const familiares = require("./familiares")
router.use("/usuarios", usuarios);
router.use("/homeless", homeless);
router.use("/familiares", familiares);
module.exports = router;