const db = require('../database/database');

class PagosModel {
  static async agregarPago(usuarioId, deudaId, montoPagado) {
    const client = await db.connect();

    try {
      await client.query('BEGIN');

      const result = await client.query(
        'INSERT INTO pagos (usuario_id, deuda_id, monto_pagado) VALUES ($1, $2, $3) RETURNING id',
        [usuarioId, deudaId, montoPagado]
      );

      const pagoId = result.rows[0].id;

      await client.query('UPDATE deudas SET estado = $1 WHERE id = $2', ['pagada', deudaId]);

      await client.query('COMMIT');

      return pagoId;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }
}

module.exports = PagosModel;