// addTsk -------------------------------
for (nbsp = 0; nbsp < 18; nbsp++) {
  if (nbsp == 0) {
    document.write("<br/>");
  } else {
    document.write("&nbsp");
  }
}
document.write("addTsk<br/><br/>");
let addTskArr = [];
let N = 7;

for (let i = 0; i < N; i++) {
  addTskArr.push(Math.floor(Math.random() * 100));
}
console.log(addTskArr);
let ReAddTskArr = [];
document.write("Массив:" + addTskArr);
ReAddTskArr = addTskArr.reverse();
document.write("<br/>Развернутый:" + ReAddTskArr + "<br/>");

// Задание 2 ----------------------------------------

let arr = [];
let notSortedArr = arr;

for (i = 0; i < N; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

for (let nbsp = 0; nbsp < 20; nbsp++) {
  if (nbsp == 0) {
    document.write("</br>");
  } else {
    document.write("&nbsp");
  }
}

document.write("tsk2<br/><br/>Массив = " + notSortedArr);

for (let m = arr.length - 1; m > 0; m--) {
  for (let n = 0; n < m; n++) {
    if (arr[n] > arr[n + 1]) {
      let temp = arr[n];
      arr[n] = arr[n + 1];
      arr[n + 1] = temp;
    }
  }
}

let sum = 0;
for (i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = Math.floor(sum / N);

document.write(
  "<br/>Наибольшее значение = " +
    arr[N - 1] +
    "<br/>Наименьшее значение = " +
    arr[0] +
    "<br/> Общая сумма єл. = " +
    sum +
    "<br/> Среднее арифметическое = " +
    average
);

let oddValues = " ";
for (i = 0; i < arr.length - 1; i++) {
  arr[i] % 2 ? (oddValues += arr[i] + ",") : null;
}
document.write("<br/> Нечетные значения = " + oddValues.slice(0, -1));

// Задание 3 -------------------------------------------------

let arrTsk3 = [];

for (i = 0; i < 5; i++) {
  arrTsk3.push(i);
  arrTsk3[i] = [];
  for (j = 0; j < 5; j++) {
    arrTsk3[i].push(Math.floor(Math.random() * 30 - 15));
  }
}

for (nbsp = 0; nbsp < 20; nbsp++) {
  if (nbsp == 0) {
    document.write("</br><br/>");
  } else {
    document.write("&nbsp");
  }
}

for (nbsp = 0; nbsp < 15; nbsp++) {
  if (nbsp == 0) {
    document.write("tsk3<br/><br/>");
  } else {
    document.write("&nbsp");
  }
}

document.write("Массив 5x5 ");

let str = "<table>";

for (i = 0; i < arrTsk3.length; i++) {
  str += "<tr>";
  for (j = 0; j < arrTsk3[i].length; j++) {
    str += `<td>${arrTsk3[i][j]}<td/>`;
  }
  str += "<tr/>";
}
document.write(str);

str = "<table>";

for (i = 0; i < arrTsk3.length; i++) {
  str += "<tr>";
  for (j = 0; j < arrTsk3[i].length; j++) {
    if (i == j) {
      if (arrTsk3[i][j] < 0) {
        arrTsk3[i][j] = 0;
      } else {
        arrTsk3[i][j] = 1;
      }
    }
    str += `<td>${arrTsk3[i][j]}<td/>`;
  }
  str += "<tr/>";
}

document.write(str + "<hr/>");
