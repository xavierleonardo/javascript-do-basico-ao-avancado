let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let p = document.querySelector('p');
let a = document.querySelector('a');

const msg = (e) => {
  console.log('Clicou no button');
  e.stopPropagation();
};

btn1.addEventListener('click', msg);
btn2.addEventListener('click', (event) => console.log(event));
p.addEventListener('click', function () {
  console.log('clicou no parágrafo');
});

a.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Não vai mudar de link');
});
