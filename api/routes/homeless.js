const express = require("express");
const router = express.Router();
const homelessControllers = require("../controllers/homeless");

router.get("/", homelessControllers.findHomeless);
router.get("/:id",homelessControllers.findoOneHomelessId)
router.post("/", homelessControllers.createHomeless);
router.put("/:id", homelessControllers.editHomeless);
router.delete("/:id", homelessControllers.deleteHomeless);

module.exports = router;