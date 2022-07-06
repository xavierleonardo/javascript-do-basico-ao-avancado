class Conta {
  saldo = 0;

  deposito(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    this.saldo -= valor;
  }
}

const conta = new Conta();
console.log(conta.saldo);
conta.deposito(20);
console.log(conta.saldo);
conta.saque(15);
console.log(conta.saldo);
