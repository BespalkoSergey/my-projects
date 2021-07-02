// Задание 2 --------------------------------------
/*
 Во второй задачке пересмотрите еще раз условие
 ---------
 Решение
 Дописал вывод нечетных чисел;
*/
let A = parseInt(prompt("Введите А"));
let B = parseInt(prompt("Введите B"));
let res = 0;
if (A < B) {
  document.write("tsk2<br/> Нечет =");
  for (let i = B - A; i != 0; i--) {
    res += i;
    i % 2 ? document.write(" " + i) : null;
  }
} else {
  alert("A больше В, так не должно быть");
}
document.write("<br/>Сумма разницы чисел = " + res + "<br/><hr>");
// Задание 3 --------------------------------------
/*
 задание 3, если ввести факториал 0 или 1, 
 ответ будет 0. Немного нужно переписать логику
 ---------
 Решение 
 дописал Else;
*/
let optionsOfTrip = parseInt(prompt("Введите кол-во возможных путей"));
if (optionsOfTrip == 0 || optionsOfTrip == 1) {
  res = 1;
} else {
  res = optionsOfTrip;
  do {
    res = res * (optionsOfTrip - 1);
    optionsOfTrip--;
  } while (optionsOfTrip > 1);
}
document.write("tsk3<br/>Кол-во вариантов доставки = " + res + "<br/><hr>");
// Задание 4 ---------------------------------------
document.write("tsk4<br/><br/>");
for (let i = 5; i > 0; i--) {
  for (let j = 15; j > 0; j--) {
    document.write("&nbsp*");
  }
  document.write("<br/>");
}
document.write("<hr>");
res = "&nbsp";
for (let i = 10; i > 0; i--) {
  res += "&nbsp*";
  document.write(res + "<br/>");
}
document.write("<hr>");
for (let i = 1; i < 6; i++) {
  for (let elemNbsp = 5 - i; elemNbsp > 0; elemNbsp--) {
    document.write("&nbsp&nbsp");
  }

  for (let elemStar = 6 + i * 2; elemStar > 7; elemStar--) {
    document.write("*");
  }
  document.write("<br/>");
}
for (let i = 1; i < 6; i++) {
  for (let elemNbsp = 7 + i; elemNbsp > 7; elemNbsp--) {
    document.write("&nbsp&nbsp");
  }
  for (let elemStar = 9 - i * 2; elemStar > 0; elemStar--) {
    document.write("*");
  }
  document.write("<br/>");
}
