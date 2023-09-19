const express = require('express');
const app = express();
const pagosRoutes = require('./routes/pagosRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/pagos', pagosRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
