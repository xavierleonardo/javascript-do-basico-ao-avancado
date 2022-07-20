const { writeFile } = require('fs');

writeFile('arquivo.txt', 'Texto por writeFile', (error) => {
  if (error) throw error;
  console.log('Escreveu com sucesso');
});
