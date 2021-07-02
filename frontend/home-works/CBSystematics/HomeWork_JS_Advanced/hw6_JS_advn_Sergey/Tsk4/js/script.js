window.onkeydown = function (e) {
  let key = e.keyCode;
  keyShCtrlS = String.fromCharCode(key).toLowerCase() == "s";
  if (e.shiftKey && e.ctrlKey && keyShCtrlS) {
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    alert("Сохранено все");
    window.focus();
    return false;
  }
  keyS = String.fromCharCode(key).toLowerCase() == "s";
  if (e.ctrlKey && keyS) {
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    alert("Сохранено");
    window.focus();
    return false;
  }
  keyA = String.fromCharCode(key).toLowerCase() == "a";
  if (e.ctrlKey && keyA) {
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
    alert("Выбрано все");
    window.focus();
    return false;
  }
};
