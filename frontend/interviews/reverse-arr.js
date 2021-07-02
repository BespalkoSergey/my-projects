// Развернуть массив не создавая новый

const arr = [1, true, 'false', 'true', false, 6];

function reverse1() {
  const arrMiddle = Math.floor(arr.length / 2);
  const lastItem = arr.length - 1;
  let tmp = 0;

  for (let i = 0; i < arrMiddle; i++) {
    tmp = arr[i];
    arr[i] = arr[lastItem - i];
    arr[lastItem - i] = tmp;
  }
}


function reverse2() {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  arr.splice(0, arr.length / 2);
}

reverse1(array);
// reverse2(array);

console.log(array);