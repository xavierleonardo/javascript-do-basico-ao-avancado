const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const router = require('./routes/jobs');

const PORT = 3000;

const app = express();

app.listen(PORT, () => console.log(`O Express está rodando na porta ${PORT}`));

app.use(bodyParser.urlencoded({ extended: false }));

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

/**
 * Jobs routes
 */
app.use('/jobs', router);

module.exports = app;
