let pessoa = { nome: 'Leonardo' };
let pessoa2 = pessoa;
let pessoa3 = { nome: 'Leonardo' };

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = 'Pedro';
console.log(pessoa.nome);

pessoa.nome = 'Maria';
console.log(pessoa2.nome);
