fetch('./pessoa.json')
  .then((response) => response.json())
  .then((pessoa) => console.log(pessoa.nome, pessoa.idade, pessoa.profissao));
