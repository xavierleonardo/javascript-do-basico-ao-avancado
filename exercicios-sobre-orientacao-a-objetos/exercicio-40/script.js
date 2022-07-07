class Conta {
  cc = 0;
  cp = 0;
  juros = 0.005;

  deposito(valor) {
    this.cc += valor;
  }

  saque(valor) {
    this.cc -= valor;
  }

  transferir(valor) {
    this.cc += valor;
    this.cp -= valor;
  }
}

class ContaEspecial extends Conta {
  juros = 0.01;
}

const conta = new Conta();
const contaEspecial = new ContaEspecial();
console.log(conta, contaEspecial);
