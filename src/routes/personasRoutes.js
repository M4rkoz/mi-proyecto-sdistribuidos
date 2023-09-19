const express = require("express");
const router = express.Router();

const PersonasController = require("../controllers/PersonasController");

router.get("/getAll", PersonasController.getDeudas);

module.exports = router;
