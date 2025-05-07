import { Client } from 'pg';

export const db = new Client({
  host: 'localhost',
  port: 5432, // ou 5433 se tiver alterado
  user: 'vandilson',
  password: 'strongpassword',
  database: 'tasks_db',
});

db.connect()
  .then(() => console.log('📡 Banco de dados conectado com sucesso'))
  .catch((err) => console.error('❌ Erro na conexão com o banco de dados:', err));
