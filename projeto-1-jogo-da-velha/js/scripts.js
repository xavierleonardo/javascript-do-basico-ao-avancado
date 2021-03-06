'use strict';

/**
 * contador de jogadas
 */
let player1 = 0;
let player2 = 0;

/**
 * limpa o jogo, declara o vencedor e atualiza o placar
 */
const declareWinner = (winner) => {
  const scoreboardO = document.getElementById('scoreboard-2');
  const scoreboardX = document.getElementById('scoreboard-1');

  let msg = '';

  if (winner === 'o') {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = 'O jogador 1 venceu!';
  } else if (winner === 'x') {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = 'O jogador 2 venceu!';
  } else {
    msg = 'Deu velha!';
  }

  /**
   * exibe msg
   */
  messageText.innerHTML = msg;
  messageContainer.classList.remove('hide');

  /**
   * esconde msg
   */
  setTimeout(() => messageContainer.classList.add('hide'), 3000);

  /**
   * zera as jogadas
   */
  player1 = 0;
  player2 = 0;

  /**
   * limpa o jogo
   */
  const boxesToRemove = document.querySelectorAll('.box div');
  boxesToRemove.forEach((box) => box.parentNode.removeChild(box));
};

/**
 * checa fim de jogo
 */
const checkWinCondition = () => {
  const map = {
    horizontal: { 1: [1, 2, 3], 2: [4, 5, 6], 3: [7, 8, 9] },
    vertical: { 1: [1, 4, 7], 2: [2, 5, 8], 3: [3, 6, 9] },
    diagonal: { 1: [1, 5, 9], 2: [3, 5, 7] },
  };

  const hasWinner = (block, num) => {
    let o = 0;
    let x = 0;

    const getBlock = (num) =>
      document.getElementById(`block-${num}`).childNodes[0]?.className;

    const isFilled = () =>
      Object.values(map.horizontal)
        .flat()
        .every((block) => {
          if (getBlock(block)) return true;
          return false;
        });

    map[block][num].forEach((num) => {
      console.log(getBlock(4));
      const block = getBlock(num);
      if (block) {
        if (block === 'o') o++;
        else if (block === 'x') x++;
      }
    });

    if (o === 3) return declareWinner('o');
    if (x === 3) return declareWinner('x');

    if (isFilled()) return declareWinner();
  };

  Object.keys(map).forEach((block) =>
    Object.keys(map[block]).forEach((num) => hasWinner(block, num))
  );
};

const x = document.querySelector('.x');
const o = document.querySelector('.o');
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.getElementById('message');
const messageText = document.querySelector('#message p');

/**
 * executar a jogada do COM
 */
const computerPlay = () => {
  const cloneX = x.cloneNode(true);
  const randomNumber = Math.floor(Math.random() * 8) + 1;
  const block = document.getElementById(`block-${randomNumber}`);

  if (!block.childNodes[0]) {
    block.appendChild(cloneX);
  } else {
    computerPlay();
  }
};

let secondPlayer;

/**
 * seleciona s??mbolo do jogador
 */
const getPlayerSymbol = () => {
  if (player1 === player2) {
    /**
     * o
     */
    player1++;
    return o;
  } else {
    /**
     * x
     */
    player2++;
    return x;
  }
};

/**
 * evento para saber se ?? single ou multi player
 */
buttons.forEach((button) =>
  button.addEventListener('click', function () {
    secondPlayer = button.getAttribute('id');
    buttons.forEach((button) => (button.style.display = 'none'));

    setTimeout(() => {
      const container = document.getElementById('container');
      container.classList.remove('hide');
    }, 500);
  })
);

/**
 * adicionando o evento de click aos boxes
 */
boxes.forEach((box) =>
  box.addEventListener('click', function () {
    const el = getPlayerSymbol();

    /** verifica se j?? tem s??mbolo */
    if (this.childNodes.length === 0) {
      const cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
      checkWinCondition();

      if (secondPlayer === 'ai-player' && player1 > 0) {
        computerPlay();
        checkWinCondition();
        player2++;
      }
    }
  })
);
