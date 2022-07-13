window.addEventListener('keydown', function (e) {
  if (e.key == 'q') console.log('Apertou a letra q');
  else console.log(e.key);
});

window.addEventListener('keyup', function (e) {
  if (e.key == 'Enter') console.log('Soltou o enter');
});
