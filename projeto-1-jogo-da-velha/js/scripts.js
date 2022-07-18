'use strict';

/**
 * contador de jogadas
 */
let player1 = 0;
let player2 = 0;

/**
 * seleciona símbolo do jogador
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

const x = document.querySelector('.x');
const o = document.querySelector('.o');
const boxes = document.querySelectorAll('.box');
const buttons = document.querySelectorAll('#buttons-container button');
const messageContainer = document.getElementById('message');
const messageText = document.querySelector('#message p');

let secondPlayer;

/**
 * adicionando o evento de click aos boxes
 */
boxes.forEach((box) => {
  box.addEventListener('click', function () {
    const el = getPlayerSymbol();

    /** verifica se já tem símbolo */
    if (this.childNodes.length === 0) {
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);
    }
  });
});
