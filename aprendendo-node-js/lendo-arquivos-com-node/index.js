const { readFile } = require('fs');

readFile('arquivo.txt', 'utf8', (error, texto) => {
  if (error) throw error;
  console.log(texto);
});
