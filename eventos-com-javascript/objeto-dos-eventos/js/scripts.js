let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

const msg = (e) => console.log(e);

btn1.addEventListener('click', msg);
btn2.addEventListener('click', (event) => console.log(event));
