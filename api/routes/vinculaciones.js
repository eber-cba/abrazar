const express = require("express");
const router = express.Router();
const vinculacionesControllers = require("../controllers/vinculaciones");

router.get("/", vinculacionesControllers.findVinculaciones);
router.get("/:id",vinculacionesControllers.findoOneVinculacionesId)
router.post("/", vinculacionesControllers.createVinculaciones);
router.put("/:id", vinculacionesControllers.editVinculaciones);
router.delete("/:id", vinculacionesControllers.deleteVinculaciones);
module.exports = router;