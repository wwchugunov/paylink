import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '1945',
  port: 5432,
  database: 'testuser',
});



export default pool;
