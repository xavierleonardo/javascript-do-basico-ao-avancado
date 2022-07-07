class Carro {
  gasolina = 0;

  constructor(marca, cor) {
    this.marca = marca;
    this.cor = cor;
  }

  dirigir(consumo) {
    this.gasolina -= consumo;
  }

  abastecer(litros) {
    this.gasolina += litros;
  }
}

const carro = new Carro('Fiat', 'white');
console.log(carro);
carro.abastecer(10);
console.log(carro);
carro.dirigir(2);
console.log(carro);
