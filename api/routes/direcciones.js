const express = require("express");
const router = express.Router();
const direccionesControllers = require("../controllers/direcciones");
router.get("/", direccionesControllers.findDirecciones);
router.get("/:id",direccionesControllers.findoOneDireccionesId)
router.post("/", direccionesControllers.createDirecciones);
router.put("/:id", direccionesControllers.editDirecciones);
router.delete("/:id", direccionesControllers.deleteDirecciones);
module.exports = router;
