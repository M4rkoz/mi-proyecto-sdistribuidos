const db = require("../database/database");

class PersonasModel {
  static async getDeudas(id) {
    const client = await db.connect();

    try {
      const result = await client.query(
        `SELECT deudas.id, deudas.monto
        FROM deudas
        INNER JOIN personas ON deudas.idPersona = personas.id
        WHERE personas.id = ${id}`
      );
      return result.rows;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PersonasModel;
