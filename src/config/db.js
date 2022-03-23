const { Pool } = require('pg');

module.exports = new Pool({
  user: 'postgres',
  password: 'senha123',
  host: 'localhost',
  port: 5432,
  database: 'launchstoredb',
});
