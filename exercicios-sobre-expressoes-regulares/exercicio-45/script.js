const regex = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(regex.test('as'));
console.log(regex.test('adaafdsfdfdsf1SFADSFSGSAF'));
console.log(regex.test('sghdhgag_-'));
