const express = require('express');
const db = require('./db/connection');

const app = express();

const PORT = 3000;

app.listen(PORT, () => console.log(`O Express está rodando na porta ${PORT}`));

/**
 * db connection
 */
db.authenticate()
  .then(() => console.log('Conectou ao banco com sucesso'))
  .catch(() => console.log('Ocorreu um erro ao conectar'));

/**
 * Routes
 */
app.get('/', (req, res) => res.send('Está funcionando 3'));
