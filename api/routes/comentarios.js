const express = require("express");
const router = express.Router();
const comentariosControllers = require("../controllers/comentarios");
router.get("/", comentariosControllers.findComentarios);
router.get("/:id", comentariosControllers.findoOneComentariosId);
router.post("/", comentariosControllers.createComentarios);
router.put("/:id", comentariosControllers.editComentarios);
router.delete("/:id", comentariosControllers.deleteComentarios);
module.exports = router;
