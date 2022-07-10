const regex = /\d+ID$/;
console.log(regex.test('jjjjj'));
console.log(regex.test('jjjjjJ'));
console.log(regex.test('JJJJJ'));
console.log(regex.test('JJJID'));
console.log(regex.test('JJJIDKKKKK'));
