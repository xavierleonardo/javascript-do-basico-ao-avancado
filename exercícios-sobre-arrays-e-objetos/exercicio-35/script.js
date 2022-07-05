const calculadora = {
  somar: (a, b) => a + b,
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => a / b,
};

const { somar, subtrair, multiplicar, dividir } = calculadora;
console.log(somar(1, 2), subtrair(1, 2), multiplicar(1, 2), dividir(1, 2));
