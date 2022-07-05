function criaCachorro(raca, patas, cor) {
  return Object.create({
    raca,
    patas,
    cor,
    latir: function () {
      console.log('Au au');
    },
  });
}

let doberman = criaCachorro('Doberman', 4, 'preta');
console.log(doberman);
doberman.latir();
