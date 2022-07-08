const reg = /\w+: (Leonardo|João|Maria)/; // Nome: nadsgsahd
console.log(reg.test('Nome: Leonardo'));
console.log(reg.test('Nome: José'));
console.log(reg.test('Nome: Maria'));
