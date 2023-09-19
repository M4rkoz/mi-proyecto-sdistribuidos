const PersonasModel = require("../models/PersonasModel");

class PersonasController {
  static async getDeudas(req, res) {
    try {
      const { id } = req.body;
      const result = await PersonasModel.getDeudas(id);
      console.log("personas controller: ", result);
      res.status(200).json(result);
    } catch (error) {
      console.log("error: ", error);
      res.status(500).json({ error: "errror en la petición" });
    }
  }
}

module.exports = PersonasController;
