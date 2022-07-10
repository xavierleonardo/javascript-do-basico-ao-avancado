const regex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
console.log(regex.test('126.522.577-06'));
console.log(regex.test('126.522.577.06'));
console.log(regex.test('127.0.0.1'));
console.log(regex.test('127.0.0.12'));
console.log(regex.test('127.0.0.1'));
