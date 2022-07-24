const path = require("path");
const express = require("express");

const studentController = require("../controllers/student");

const router = express.Router();

router.post("/create", studentController.create);
router.get("/read/all", studentController.readAll);
router.post("/read", studentController.read);
router.post("/update", studentController.update);
router.post("/delete", studentController.remove);

module.exports = router;
