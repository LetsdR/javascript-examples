// Queryselector

const btn$$ = document.querySelector('#btn');

console.log(btn$$);

const h2$$ = document.querySelector('.text-heading');

console.log(h2$$);

h2$$.innerHTML = 'He sido actualizado';

const p$$ = document.querySelector('p');
const pAll$$ = document.querySelectorAll('p');

console.log(p$$);
console.log(pAll$$);

const dataFunction$$ = document.querySelector('[href="https://www.google.es/"]');

console.log(dataFunction$$);


// BUENA PRACTICA

const dataFunction2$$ = document.querySelector('[data-function="test"]');

console.log(dataFunction2$$);


const fn$$ = document.querySelector('.fn-test');

console.log(fn$$);

