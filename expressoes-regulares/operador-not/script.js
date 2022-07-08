const notab = /[^ab]/;
console.log(notab.test('a'));
console.log(notab.test('Aqui tem a'));

const notaz = /[^a-z]/;
console.log(notaz.test('123 as'));
console.log(notaz.test('s\fafdsdgdhasfarrssr'));

const az = /[a-z]/;
console.log(az.test('sfadfaq34234543jv'));
