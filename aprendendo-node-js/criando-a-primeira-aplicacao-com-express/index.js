const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Primeira rota com Express'));

app.listen(3000, () =>
  console.log('A aplicação está funcionando na porta 3000')
);
