const express = require("express");
const router = express.Router();
const contactoDeEmergenciaControllers = require("../controllers/contactoDeEmergencia");
router.get("/", contactoDeEmergenciaControllers.findContacto);
router.post("/addContactoEmergencia", contactoDeEmergenciaControllers.createContacto);
router.put("/:id", contactoDeEmergenciaControllers.editContacto);
router.delete("/:id", contactoDeEmergenciaControllers.deleteContacto);
module.exports = router;
