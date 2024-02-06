'use strict';
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const firstUpperCase = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformed = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformed('JavaScript is the best', firstUpperCase);
transformed('JavaScript is the best', oneWord);
