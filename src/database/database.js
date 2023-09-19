const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "deudas",
  password: "gary123123",
  port: 5432,
});

module.exports = pool;
