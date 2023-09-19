const express = require("express");
const app = express();
const pagosRoutes = require("./routes/pagosRoutes");
const personasRoutes = require("./routes/personasRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/pagos", pagosRoutes);
app.use("/deudas", personasRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
