const express = require("express");
const router = express.Router();
const followersControllers = require("../controllers/followers");

router.get("/allFollowers", followersControllers.findFollowers);
router.get("/:id",followersControllers.findoOneFollowers)
router.post("/addFollowers", followersControllers.createFollowers);
//router.put("/:id", followersControllers.editFollowers);
router.delete("/:id", followersControllers.deleteFollowers);

module.exports = router;