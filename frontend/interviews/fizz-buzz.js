// FizzBuzz

const base = (str = '') => (state = '') => str += state;
for (let i = 1; i <= 100; i++) {
  const state = base();
  i % 3 === 0 && state('Fizz');
  i % 5 === 0 && state('Buzz');
  console.log(state() || i);
}

//-------------------------------------------------------

const arr = [...Array(99).keys()].map(i => i + 1);
const modulo = (m, s) => num => num % m === 0 ? s : '';
const fizz = modulo(3, 'Fizz');
const buzz = modulo(5, 'Buzz');
const fizzBuzz = arr.map(i => `${fizz(i) + buzz(i) || i}`)
fizzBuzz.forEach(i => console.log(i))