let childrenOfDisplayClass = document.querySelectorAll(".display *");
let childrenOfButtonsClass = document.querySelectorAll(".buttons *");
let inputForOperandX = childrenOfDisplayClass[0];
let inputForOperandY = childrenOfDisplayClass[2];
let divForOperator = childrenOfDisplayClass[1];
let divForResult = childrenOfDisplayClass[3];
let add = childrenOfButtonsClass[0];
let sub = childrenOfButtonsClass[1];
let mul = childrenOfButtonsClass[2];
let div = childrenOfButtonsClass[3];

function write(place, string) {
  return (place.textContent = string);
}

function addStyle() {
  if (this.value == "") {
    this.classList.add("smallFontSize");
  }
  if (this.value != "") {
    this.classList.remove("smallFontSize");
  }
}

function performOperationsOnVariables(symbol, array) {
  if (symbol == "+") {
    return array[0] + array[1];
  }
  if (symbol == "-") {
    if (array[1] > 0) return array[0] - array[1];
    if (array[1] < 0) return array[0] - array[1];
    if (array[0] == 0) return Math.abs(array[1]);
    if (array[1] == 0) return array[0];
  }
  if (symbol == "*") {
    if (array[1] > 0) return array[0] * array[1];
    if (array[1] < 0) return array[1] * array[0];
    if (array[1] == 0) return 0;
  }

  if (symbol == "/") {
    if (array[1] == 0) return "На ноль делить нельзя";
    return array[0] / array[1];
  }
}

function readingInputValues(inputX, inputY) {
  let tempArray = [];
  tempArray.push(parseInt(inputX.value));
  tempArray.push(parseInt(inputY.value));
  return tempArray;
}

function getResultOfOperationOnVariables() {
  let operand = this.textContent;
  let valuesOfInputs = readingInputValues(inputForOperandX, inputForOperandY);
  let res = performOperationsOnVariables(operand, valuesOfInputs);
  let output;
  if (res == "На ноль делить нельзя") {
    divForResult.classList.add("smallFontSize");
    output = res;
  }
  if (res != "На ноль делить нельзя") {
    if (divForResult.classList.contains("smallFontSize")) {
      divForResult.classList.remove("smallFontSize");
    }
    output = `= ${res}`;
    if (output.length > 6) {
      divForResult.classList.add("smallFontSize");
    }
  }
  write(divForOperator, operand);
  write(divForResult, output);
}
