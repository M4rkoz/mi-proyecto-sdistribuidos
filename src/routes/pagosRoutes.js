const express = require('express');
const router = express.Router();
const PagosController = require('../controllers/pagosController');

router.post('/agregar', PagosController.agregarPago);

module.exports = router;
