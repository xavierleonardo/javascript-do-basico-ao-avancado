const pessoa = fetch('./pessoa.json')
  .then((response) => response.json())
  .then((pessoa) => {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
  });
