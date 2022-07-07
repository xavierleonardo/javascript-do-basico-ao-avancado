class Carrinho {
  itens = [];
  valor = 0;

  get quantidade() {
    return this.itens.length;
  }

  adicionar(item) {
    this.itens.push(item);
    this.valor += item.valor;
  }

  remover(id) {
    this.itens = this.itens.reduce((acc, item) => {
      console.log();
      if (id === item.id) {
        this.valor -= item.valor;
        return acc;
      } else {
        return [...acc, item];
      }
    }, []);
  }
}

const carrinho = new Carrinho();
console.log(carrinho);
carrinho.adicionar({ id: 1, valor: 1.99 });
console.log(carrinho, carrinho.quantidade);
carrinho.adicionar({ id: 2, valor: 3.89 });
console.log(carrinho, carrinho.quantidade);
carrinho.remover(1);
console.log(carrinho, carrinho.quantidade);
