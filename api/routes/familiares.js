const express = require("express");
const router = express.Router();
const familiaresControllers = require("../controllers/familiares");

router.get("/", familiaresControllers.findFamiliares);
router.get("/:id",familiaresControllers.findoOneFamiliaresId)
router.post("/", familiaresControllers.createFamiliares);
router.put("/:id", familiaresControllers.editFamiliares);
router.delete("/:id", familiaresControllers.deleteFamiliares);
module.exports = router;