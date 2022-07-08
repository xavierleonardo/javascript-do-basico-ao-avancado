const pontoRegex = /./;
console.log('.');
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123sad'));

const dRegex = /\d/; // [0-9]
console.log('d');
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('123sad'));

const DRegex = /\D/; // [^0-9]
console.log('D');
console.log(DRegex.test('asd'));
console.log(DRegex.test(' '));
console.log(DRegex.test('123'));
console.log(DRegex.test('123sad'));

const sRegex = /\s/;
console.log('s');
console.log(sRegex.test('asd'));
console.log(sRegex.test(' '));
console.log(sRegex.test('123'));
console.log(sRegex.test('123sad'));

const wRegex = /\w/;
console.log('w');
console.log(wRegex.test('asd'));
console.log(wRegex.test(' '));
console.log(wRegex.test('123'));
console.log(wRegex.test('123sad'));
