const path = require("path");
const express = require("express");

const borrowController = require("../controllers/borrow");

const router = express.Router();

router.post("/", borrowController.borrow);
router.post("/return", borrowController.remove);

module.exports = router;
