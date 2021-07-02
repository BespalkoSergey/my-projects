//Дополнительное задание ------------------------------------------------------

function eventAnnouncementDOMl0() {
  inputForOperandX.onkeyup = addStyle;
  inputForOperandY.onkeyup = addStyle;

  add.onclick = getResultOfOperationOnVariables;
  sub.onclick = getResultOfOperationOnVariables;
  mul.onclick = getResultOfOperationOnVariables;
  div.onclick = getResultOfOperationOnVariables;
}

function eventAnnouncementDOMl2() {
  inputForOperandX.addEventListener("keyup", addStyle, false);
  inputForOperandY.addEventListener("keyup", addStyle, false);

  add.addEventListener("click", getResultOfOperationOnVariables, false);
  sub.addEventListener("click", getResultOfOperationOnVariables, false);
  mul.addEventListener("click", getResultOfOperationOnVariables, false);
  div.addEventListener("click", getResultOfOperationOnVariables, false);
}
