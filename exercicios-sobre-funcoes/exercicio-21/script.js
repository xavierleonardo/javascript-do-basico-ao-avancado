const detect = (param) => {
  const type = typeof param;
  switch (type) {
    case 'number':
      return 'Number';
    case 'boolean':
      return 'Boolean';
    default:
      return 'String';
  }
};

console.log(detect(33));
console.log(detect(false));
console.log(detect('false'));
