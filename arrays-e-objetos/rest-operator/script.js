let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
  args.forEach((arg) => console.log(arg));
}

imprimirNumeros(num, num1, num2);
imprimirNumeros('Pausa');
imprimirNumeros(num2, num3);
imprimirNumeros('Pausa');
imprimirNumeros(2, 6, 7, 8, 9, 5, 3, 2, 5, 6, 2, 4, 5);
