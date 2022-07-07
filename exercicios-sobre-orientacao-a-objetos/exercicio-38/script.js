class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set setRua(rua) {
    this.rua = rua;
  }

  set setBairro(bairro) {
    this.bairro = bairro;
  }

  set setCidade(cidade) {
    this.cidade = cidade;
  }

  set setEstado(estado) {
    this.estado = estado;
  }
}

const endereco = new Endereco('', '', '', '');
console.log(endereco);
endereco.setRua = 'Rua Professor José Reuther';
console.log(endereco);
endereco.setBairro = 'Mosela';
console.log(endereco);
endereco.setCidade = 'Petrópolis';
console.log(endereco);
endereco.setEstado = 'RJ';
console.log(endereco);
