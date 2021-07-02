import { increment, decrement, count } from './counter.js';

const Subject = rxjs.Subject;

const min = 0;
const max = 5;
const counterOfSlider = count(min, max);
const addToCount = counterOfSlider(increment);
const subToCount = counterOfSlider(decrement);


console.log(new Subject());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(addToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());
console.log(subToCount());