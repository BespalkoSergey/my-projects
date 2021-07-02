// Задание 1 ------------------------------------------------------------------

function eventDOMl2Task1() {
  function addingFunctionalityFromTask1(inputX, inputY) {
    function checkForPattern(e) {
      let eventCharCode = String.fromCharCode(e.charCode);
      let pattern = /[0123456789-]/;
      if (!pattern.test(eventCharCode)) {
        e.preventDefault();
      }
    }
    inputX.addEventListener("keypress", checkForPattern, true);
    inputY.addEventListener("keypress", checkForPattern, true);
  }

  addingFunctionalityFromTask1(inputForOperandX, inputForOperandY);

  inputForOperandX.addEventListener("keyup", addStyle, false);
  inputForOperandY.addEventListener("keyup", addStyle, false);

  add.addEventListener("click", getResultOfOperationOnVariables, false);
  sub.addEventListener("click", getResultOfOperationOnVariables, false);
  mul.addEventListener("click", getResultOfOperationOnVariables, false);
  div.addEventListener("click", getResultOfOperationOnVariables, false);
}

