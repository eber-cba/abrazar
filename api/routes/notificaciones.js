const express = require("express");
const router = express.Router();
const notificacionesControllers = require("../controllers/notificaciones");

router.post("/", notificacionesControllers.createNotificaciones);
router.get("/", notificacionesControllers.findNotificaciones);
router.get("/:id",notificacionesControllers.findoOneNotificacionesId)
router.delete("/:id", notificacionesControllers.deleteNotificaciones);

module.exports = router;
