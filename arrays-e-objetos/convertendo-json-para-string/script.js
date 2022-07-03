const pessoa = fetch('./pessoa.json')
  .then((response) => response.json())
  .then((pessoa) => {
    let pessoaTexto = JSON.stringify(pessoa);
    console.log(pessoaTexto);

    let pessoaJSON = JSON.parse(pessoaTexto);
    console.log(pessoaJSON);
    console.log(pessoaJSON.hobbies[0]);
  });
