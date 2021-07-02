// Поменять местами переменные

let a = 5;
let b = 2;

a = a + b;
b = a - b;
a = a - b;

console.log({ a, b });