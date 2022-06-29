const primo = (num) => {
  let primo = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) primo = false;
    break;
  }

  const resposta = primo ? 'É primo' : 'Não é primo';
  console.log(resposta);
};

primo(14);
