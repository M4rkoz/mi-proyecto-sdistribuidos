const db = require("../database/database");

class PagosModel {
  static async agregarPago(usuarioId, deudaId) {
    const client = await db.connect();

    try {
      await client.query("BEGIN");

      var date= new Date();
      const result = await client.query(
        "INSERT INTO pagos (idpersona, iddeuda,fecha) VALUES ($1, $2,$3) RETURNING id",
        [usuarioId, deudaId,date]
      );

      const pagoId = result.rows[0].id;

      await client.query("UPDATE deudas SET estado = $1 WHERE id = $2", [
        true,
        deudaId,
      ]);

      await client.query("COMMIT");

      return pagoId;
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
}

module.exports = PagosModel;
