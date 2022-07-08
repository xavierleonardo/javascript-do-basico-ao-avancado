const validarEmail = /\w+@\w+\.\w+/;
console.log(validarEmail.test('leonardo@gmail.com'));
console.log(validarEmail.test('leonardo@gmail'));
console.log(validarEmail.test('gmail.com'));
console.log(validarEmail.test('leonardo@gmail.com.br'));
console.log(validarEmail.test('gmail@gmail.gmail.gmail'));
