function Cachorro(raca, patas, cor) {
  return Object.create({
    raca,
    patas,
    cor,
    uivar: function () {
      console.log('Auuuuuuuuuuuuu');
    },
  });
}

let husky = new Cachorro('Husky', 4, 'cinza');
husky.uivar();
