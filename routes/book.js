const path = require("path");
const express = require("express");

const bookController = require("../controllers/book");

const router = express.Router();

router.post("/create", bookController.create);
router.get("/read/all", bookController.readAll);
router.post("/read", bookController.read);
router.post("/update", bookController.update);
router.post("/delete", bookController.remove);

module.exports = router;
