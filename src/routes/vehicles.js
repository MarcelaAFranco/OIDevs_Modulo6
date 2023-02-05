const express = require("express");
const router = express.Router();
const controller = require("../controllers/vehicles.js");

router.post("/", controller.createOne);
router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.patch("/:id", controller.changeOne);
router.delete("/:id", controller.removeOne);

module.exports = router;