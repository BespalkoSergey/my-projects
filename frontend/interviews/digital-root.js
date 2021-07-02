/*
Digital root is the recursive sum of all the digits in a
number.
Given n, take the sum of the digits of n. If that value
 has more than one digit, continue reducing in this
 until a single-digit number is produced.
The input will be non-negative integer.
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 --> 1 + 1 = 2
*/

function digitalRoot1(n) {
  let arrOfStr = n.toString().split('');
  let arrOfNums = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    arrOfNums.push(parseInt(arrOfStr[i]));
  }
  let res = arrOfNums.reduce((acc, item) => acc + item);
  return res < 9 ? res : digitalRoot1(res);
}

function digitalRoot2(n) {
  const res = n
    .toString()
    .split('')
    .map(item => parseInt(item))
    .reduce((acc, item) => acc + item);
  return res < 9 ? res : digitalRoot2(res);
}

function digitalRoot3(n) {
  let arrOfStr = n.toString().split('');
  let arrOfNums = [];
  for (let i = 0; i < arrOfStr.length; i++) {
    arrOfNums.push(parseInt(arrOfStr[i]));
  }
  let res = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    res += arrOfNums[i];

  }
  return res < 9 ? res : digitalRoot3(res);
}

function digitalRoot4(n) {
  let res = n;
  do {
    let arrOfStr = res.toString().split('');
    let arrOfNums = [];
    for (let i = 0; i < arrOfStr.length; i++) {
      arrOfNums.push(parseInt(arrOfStr[i]));
    }
    res = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
      res += arrOfNums[i];
    }
  } while (res > 9);

  return res;
}

console.log(digitalRoot(31113));