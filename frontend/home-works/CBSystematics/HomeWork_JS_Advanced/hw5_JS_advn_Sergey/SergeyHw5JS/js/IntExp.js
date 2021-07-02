// Задание 2 ------------------------------------------------------------------

var inputs = document.getElementsByTagName("input");
var inputForOperandXIE = inputs[0];
var inputForOperandYIE = inputs[1];

var divForOperatorIE = document.getElementById("outN1");
var divForResultIE = document.getElementById("outN2");
var addIE = document.getElementById("+");
var subIE = document.getElementById("-");
var mulIE = document.getElementById("*");
var divIE = document.getElementById("/");

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

function gettingResultForIE5_10() {
  function checkingPattern(inputX, inputY) {
    function checkForPattern(e) {
      var eventKeyCode = String.fromCharCode(e.keyCode);
      var pattern = /[0123456789]/;
      if (!pattern.test(eventKeyCode)) {
        e.returnValue = false;
      }
    }
    inputX.attachEvent("onkeypress", checkForPattern);
    inputY.attachEvent("onkeypress", checkForPattern);
  }

  window.attachEvent("onload", function () {
    inputForOperandXIE.value = "";
    inputForOperandYIE.value = "";
  });

  inputForOperandXIE.attachEvent("onkeyup", function (e) {
    inputX = inputForOperandXIE.value;
    var backspace = false;
    if (e.keyCode == "8") {
      backspace = true;
    }
    if (inputX.length < 1 && backspace) {
      inputForOperandXIE.className = "smallFontSize";
    } else if (inputX != "") {
      inputForOperandXIE.className = "normalFontSize";
    }
  });

  inputForOperandYIE.attachEvent("onkeyup", function (e) {
    inputY = inputForOperandYIE.value;
    var backspace = false;
    if (e.keyCode == "8") {
      backspace = true;
    }
    if (inputY.length < 1 && backspace) {
      inputForOperandYIE.className = "smallFontSize";
    } else if (inputY != "") {
      inputForOperandYIE.className = "normalFontSize";
    }
  });

  function outputResult(symbol) {
    var tempArray = [];
    divForOperatorIE.innerText = symbol.id;
    tempArray.push(parseInt(inputForOperandXIE.value));
    tempArray.push(parseInt(inputForOperandYIE.value));
    var res = performOperationsOnVariables(symbol.id, tempArray);
    var answer = "=" + " " + res;
    if (answer.length <= 6) {
      divForResultIE.className = "normalFontSize";
    }
    if (answer.length >= 7) {
      divForResultIE.className = "smallFontSize";
    }
    divForResultIE.innerText = answer;
  }

  checkingPattern(inputForOperandXIE, inputForOperandYIE);

  addIE.attachEvent("onclick", function () {
    outputResult(addIE);
  });
  subIE.attachEvent("onclick", function () {
    outputResult(subIE);
  });
  mulIE.attachEvent("onclick", function () {
    outputResult(mulIE);
  });
  divIE.attachEvent("onclick", function () {
    outputResult(divIE);
  });
}
//-------------------------------------------------
function gettingResultForIE11() {
  function checkingPattern(inputX, inputY) {
    function checkForPattern(e) {
      var eventKeyCode = String.fromCharCode(e.keyCode);
      var pattern = /[0123456789]/;
      if (!pattern.test(eventKeyCode)) {
        e.returnValue = false;
      }
    }
    inputX.addEventListener("keypress", checkForPattern);
    inputY.addEventListener("keypress", checkForPattern);
  }

  window.addEventListener("load", function () {
    inputForOperandXIE.value = "";
    inputForOperandYIE.value = "";
  });

  inputForOperandXIE.addEventListener("keyup", function (e) {
    inputX = inputForOperandXIE.value;
    var backspace = false;
    if (e.keyCode == "8") {
      backspace = true;
    }
    if (inputX.length < 1 && backspace) {
      inputForOperandXIE.className = "smallFontSize";
    } else if (inputX != "") {
      inputForOperandXIE.className = "normalFontSize";
    }
  });

  inputForOperandYIE.addEventListener("keyup", function (e) {
    inputY = inputForOperandYIE.value;
    var backspace = false;
    if (e.keyCode == "8") {
      backspace = true;
    }
    if (inputY.length < 1 && backspace) {
      inputForOperandYIE.className = "smallFontSize";
    } else if (inputY != "") {
      inputForOperandYIE.className = "normalFontSize";
    }
  });

  function outputResult(symbol) {
    var tempArray = [];
    divForOperatorIE.innerText = symbol.id;
    tempArray.push(parseInt(inputForOperandXIE.value));
    tempArray.push(parseInt(inputForOperandYIE.value));
    var res = performOperationsOnVariables(symbol.id, tempArray);
    var answer = "=" + " " + res;
    if (answer.length <= 6) {
      divForResultIE.className = "normalFontSize";
    }
    if (answer.length >= 7) {
      divForResultIE.className = "smallFontSize";
    }
    divForResultIE.innerText = answer;
  }

  checkingPattern(inputForOperandXIE, inputForOperandYIE);

  addIE.addEventListener("click", function () {
    outputResult(addIE);
  });
  subIE.addEventListener("click", function () {
    outputResult(subIE);
  });
  mulIE.addEventListener("click", function () {
    outputResult(mulIE);
  });
  divIE.addEventListener("click", function () {
    outputResult(divIE);
  });
}