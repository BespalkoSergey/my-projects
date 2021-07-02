let getId = function(id) {
  return document.getElementById(id);
};

getId("btn1").onclick = function() {
  let string = getId("input1").value;
  let pattern = /\D/g;
  let arrayStr = string.split(pattern);
  let res = string.match(pattern)[0];
  let operandX = parseInt(arrayStr[0]);
  let operandY = parseInt(arrayStr[1]);
  if (res == "+") {
    getId("p1").textContent = `${operandX}+${operandY}=${operandX + operandY}`;
  }
  if (res == "-") {
    getId("p1").textContent = `${operandX}-${operandY}=${operandX - operandY}`;
  }
  if (res == "*") {
    getId("p1").textContent = `${operandX}*${operandY}=${operandX * operandY}`;
  }
  if (res == "/") {
    getId("p1").textContent = `${operandX}/${operandY}=${operandX / operandY}`;
  }
  if (res != "+" && res != "-" && res != "*" && res != "/") {
    getId("p1").textContent = `Такой операции нет`;
  }
};
