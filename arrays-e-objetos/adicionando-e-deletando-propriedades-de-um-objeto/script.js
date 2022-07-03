let pessoa = { nome: 'Leonardo', idade: 34, profissao: 'Programador' };
console.log(pessoa.nome);

delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);

pessoa.casada = false;
console.log(pessoa.casada);
