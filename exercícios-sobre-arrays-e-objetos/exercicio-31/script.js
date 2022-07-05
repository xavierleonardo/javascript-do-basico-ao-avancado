const arr = ['Pedro', 'João', 'Maria', 'Leonardo', 'Matheus', 0];
const arr2 = ['Pedro', 'João', 'Maria', 'Leonardo'];

const analise = (arr) => {
  if (arr.length < 5) console.log('Poucos elementos');
  if (arr.length > 5) console.log('Muitos elementos');
};

analise(arr);
analise(arr2);
