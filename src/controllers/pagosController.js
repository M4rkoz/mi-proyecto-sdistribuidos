const PagosModel = require("../models/pagosModel");

class PagosController {
  static async agregarPago(req, res) {
    try {
      const { usuarioId, deudaId, montoPagado } = req.body;
      const pagoId = await PagosModel.agregarPago(
        usuarioId,
        deudaId,
        montoPagado
      );
      res.status(201).json({ mensaje: "Pago agregado correctamente", pagoId });
    } catch (error) {
      console.error("Error al agregar el pago:", error);
      res.status(500).json({ error: "Ocurrió un error en el servidor UAGRM." });
    }
  }
}

module.exports = PagosController;
