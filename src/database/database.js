const { Pool } = require('pg');

const pool = new Pool({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'nombre_de_la_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

module.exports = pool;