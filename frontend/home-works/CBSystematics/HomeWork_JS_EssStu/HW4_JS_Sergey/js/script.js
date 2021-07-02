// tsk1 ---------------------------------
document.write("<hr/>tsk1<br/><br/>");

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (a == 0) {
    return 0;
  } else if (b == 0) {
    return undefined;
  } else {
    return a / b;
  }
}

let key = prompt('Введите: "+" ,"-","*","/"');
let a = parseInt(prompt('Введите: "a"'));
let b = parseInt(prompt('Введите: "b"'));

switch (key) {
  case "+":
    document.write(`${a}+${b}=${add(a, b)}`);
    break;

  case "-":
    document.write(`${a}-${b}=${sub(a, b)}`);
    break;

  case "*":
    document.write(`${a}*${b}=${mul(a, b)}`);
    break;

  case "/":
    if (div(a, b) != undefined) {
      document.write(`${a}/${b}=${div(a, b)}`);
    } else {
      document.write("На ноль делить нельзя");
    }
    break;

  default:
    document.write("Такой операции нет");
    break;
}
// tsk2 ---------------------------------

document.write("<br/><hr/>tsk2<br/><br/>");

function pos_neg(operandX) {
  return operandX > 0 ? "Позитивное" : "Отрицательное";
}

function simple(operandX) {
  if (operandX < 1) {
    return "Число не натуральное";
  } else if (operandX == 1) {
    return "Не простое и не составное";
  } else if (operandX == 2) {
    return "Число простое";
  } else if (operandX % 2 == 0 && operandX != 2) {
    return "Составное число";
  } else {
    let sqrtOperandX = Math.round(Math.sqrt(operandX));
    for (let i = 3; i <= sqrtOperandX; i += 2)
      if (operandX % i == 0) {
        return "Составное число";
      }
    return "Простое число";
  }
}

function divTsk2(operandX) {
  let res = [];
  if (operandX % 9 == false) {
    res.push("9");
  }
  if (operandX % 6 == false) {
    res.push("6");
  }
  if (operandX % 5 == false) {
    res.push("5");
  }
  if (operandX % 3 == false) {
    res.push("3");
  }
  if (operandX % 2 == false) {
    res.push("2");
  }
  if (
    operandX % 9 &&
    operandX % 6 &&
    operandX % 5 &&
    operandX % 3 &&
    operandX % 2
  ) {
    res.push("По условию такой делитель не задан");
  }
  return `Делиться без остатка на: ${res}`;
}

function multiOperations(oper) {
  let resMulti = [];
  resMulti.push(pos_neg(oper));
  resMulti.push(simple(oper));
  resMulti.push(divTsk2(oper));
  return resMulti;
}

let oper = parseInt(prompt("Введите число для второго задания"));
document.write(multiOperations(oper));
