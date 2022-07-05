const cachorro = {
  raca: 'SRD',
  uivar: () => console.log('Auuuuuuuu'),
  rosnar: () => console.log('grrrrrrrr'),
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function () {
    return 'A raça é ' + this.raca;
  },
};

console.log(cachorro.raca);

cachorro.setRaca('');
console.log(cachorro.raca);

console.log(cachorro.getRaca());
