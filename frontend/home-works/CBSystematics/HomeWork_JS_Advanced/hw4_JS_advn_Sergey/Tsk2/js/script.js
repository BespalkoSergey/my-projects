let get = function(id, index) {
  return document.querySelectorAll(id)[index];
};

let form = get("form", 0);
let divHead = get("div.head", 0);
let inputUsername = get("input", 0);
let inputPassword = get("input", 1);
let checkbox = get("input", 2);
let button = get("input", 3);
let permissionToSubmitForm;
let green = "rgb(0 255 0)";
let red = "rgb(255, 0, 0)";
let grey = "rgb(128, 128, 128)";

function setColor(color) {
  inputUsername.style.color = color;
  inputPassword.style.color = color;
  if (color == grey) {
    button.style.background = `background: linear-gradient(#edf4f8, #d2e6ef)`;
  } else {
    button.style.background = `linear-gradient(#edf4f8, ${color})`;
  }
}

function flagBasedRendering(flagColor) {
  if (flagColor == "green") {
    return setColor(green);
  }
  if (flagColor == "red") {
    return setColor(red);
  }
  if (flagColor == "grey") {
    return setColor(grey);
  }
}

function validationOfInputs(inputUser, inputPas) {
  permissionToSubmitForm = false;
  let inputValueUser = inputUser.value;
  let inputValuePas = inputPas.value;
  if (inputValueUser == "admin" && inputValuePas == "12345") {
    flagBasedRendering("green");
    divHead.textContent = "You are authorized";
    divHead.style.color = green;
    permissionToSubmitForm = true;
  } else {
    flagBasedRendering("red");
    permissionToSubmitForm = false;
    if (inputValueUser.length ==0 || inputValuePas.length == 0){
      divHead.textContent = "You do not fill Login & Password";
      divHead.style.color = red;
    }else{
      divHead.textContent = "Wrong Login or Password";
      divHead.style.color = red;
    }
  }
}

button.onclick = function() {
  validationOfInputs(inputUsername, inputPassword);
  if (permissionToSubmitForm) {
    setTimeout(function() {
      form.submit();
    }, 500);
  }
};
