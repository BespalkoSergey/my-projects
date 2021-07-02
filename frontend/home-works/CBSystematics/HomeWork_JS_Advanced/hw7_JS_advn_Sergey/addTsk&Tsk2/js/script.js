// ------------------------ Решение Доп. задачи ------------------------
let elementsOfLogin = document.forms[0].elements[0].elements;
let elementsOfPerson = document.forms[0].elements[4].elements;
let passwordElemets = document.querySelectorAll('input[type="password"]');
let form = document.forms[0];
let button = document.querySelector("#button");
let inputs = document.querySelectorAll("input");
let patternSpacebar = /^\s+|\s+$/;
let patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let green = "rgb(0, 255, 0)";
let red = "rgb(255, 0, 0)";
let none = "";
let permissionEmail = false;
let permisSpacebar = false;
let checkingElementForInputClassEmail = false;
let arrayForPermissions = [];
let passwordObj = {};

passwordObj.password = "";
passwordObj.repassword = "";

//--- Функция Проверки Есть ли хотя бы одно поле не Валидное ---

function setPermissionToSubmitForm(array) {
  for (element of array) {
    if (element == "NO") {
      return false;
    }
  }
  return true;
}

//------------------- Валидация при отправке ---------------

function validationOfInputs() {
  arrayForPermissions = [];
  let setForPasswords = new Set();

  for (let element of arguments) {
    for (let item of element) {
      permisSpacebar = patternSpacebar.test(String(item.value).toLowerCase());
      permissionEmail = patternEmail.test(String(item.value).toLowerCase());
      checkingElementForInputClassEmail = item.classList.contains("email");
      if (
        item.name != "Sex" &&
        item.value.length > 1 &&
        item.value != item.attributes.watermark.value
      ) {
        item.style.borderColor = green;
      }
      if (item.name != "Sex") {
        if (
          item.value.length < 1 ||
          item.value == item.attributes.watermark.value
        ) {
          item.style.borderColor = red;
          arrayForPermissions.push("NO");
        }
      }
      if (permisSpacebar) {
        item.style.borderColor = red;
        arrayForPermissions.push("NO");
      }
      if (item.value == "Select") {
        item.style.borderColor = red;
        arrayForPermissions.push("NO");
      }
      if (checkingElementForInputClassEmail) {
        if (permissionEmail) {
          item.style.borderColor = green;
        } else {
          item.style.borderColor = red;
          arrayForPermissions.push("NO");
        }
      }
      if (item.type == "password") {
        setForPasswords.add(item.value);
      }
    }
  }
  if (setForPasswords.size > 1) {
    passwordElemets.forEach((e) => (e.style.borderColor = red));
    arrayForPermissions.push("NO");
  }
}

//------------------- Валидация при изменении ---------------

document.addEventListener("change", function (event) {
  let target = event.target;

  permissionEmail = patternEmail.test(String(target.value).toLowerCase());
  checkingElementForInputClassEmail = target.classList.contains("email");
  passwordObj.password = passwordElemets[0].value;
  passwordObj.repassword = passwordElemets[1].value;

  let spacebarPas = patternSpacebar.test(
    String(passwordElemets[0].value).toLowerCase()
  );
  let spacebarRepas = patternSpacebar.test(
    String(passwordElemets[1].value).toLowerCase()
  );

  if (target.value.length < 1) {
    target.style.borderColor = none;
  }
  if (target.value.length > 1) {
    target.style.borderColor = green;
  }
  if (target.name == "Sex") {
    let value = target.value;
    if (value == "male" || value == "female") target.style.borderColor = green;
  }
  if (checkingElementForInputClassEmail) {
    if (permissionEmail) {
      target.style.borderColor = green;
    } else {
      target.style.borderColor = red;
      arrayForPermissions.push("NO");
    }
  }
  if (
    passwordObj.password == passwordObj.repassword &&
    !spacebarPas &&
    !spacebarRepas &&
    passwordObj.password.length > 0 &&
    passwordObj.repassword.length > 0
  ) {
    passwordElemets.forEach((e) => (e.style.borderColor = green));
  }
  if (passwordObj.password != passwordObj.repassword) {
    passwordElemets.forEach((e) => (e.style.borderColor = red));
    arrayForPermissions.push("NO");
  }
  if (passwordObj.password.length < 1 && passwordObj.repassword.length < 1) {
    passwordElemets.forEach(function (e) {
      e.style.borderColor = none;
    });
  }
});

// ---------------- Запрет на ввод пробела ---------------------------

document.addEventListener("keydown", function (e) {
  let key = parseInt(event.keyCode);
  if (key == 32) {
    e.preventDefault();
  }
});

// --------------- Отправка формы ----------------------------

button.addEventListener("click", function () {
  validationOfInputs(elementsOfLogin, elementsOfPerson);
  let tempPermission = setPermissionToSubmitForm(arrayForPermissions);
  if (tempPermission) {
    setTimeout(function () {
      form.submit();
    }, 600);
  }
});

//--------------- Решение второй задачи -------------------------------------

//------- Делаю у input type="password" видемый Watermark -------------------------------------

inputs.forEach((e) => (e.value = e.attributes.watermark.value));
passwordElemets.forEach((e) => (e.type = "text"));

function makeVisibleAttribute(e) {
  let element = e.srcElement;
  if (element.value == element.attributes.watermark.value) {
    element.type = "text";
  }
  if (element.value == "") {
    element.type = "text";
  } else {
    element.type = "password";
    console.log(element.type);
  }
}

passwordElemets[0].addEventListener("change", function (e) {
  makeVisibleAttribute(e);
});

passwordElemets[1].addEventListener("change", function (e) {
  makeVisibleAttribute(e);
});

/*Виталий, я пытался сократить код в функции 
и потом использовать функции, но почему-то код 
работал только если поле до этого кликали а так 
то не уберал watermark, зато когда непосредственно 
прописал начал работать, так что сорян за полотно*/

// ------------ Удаление Подсказки ----------------

inputs[0].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});
inputs[1].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});
inputs[2].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});
inputs[3].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});
inputs[4].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});

// ---------------- Добавление подсказки -------------------------

inputs[0].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});
inputs[1].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});
inputs[2].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});
inputs[3].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});
inputs[4].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});

// -------- Добавление и удаление подсказки email отдельно --------

elementsOfPerson[2].addEventListener("focus", function (e) {
  let obj = e.srcElement;
  if (obj.value == obj.attributes.watermark.value) {
    obj.value = "";
  }
});

elementsOfPerson[2].addEventListener("blur", function (e) {
  let obj = e.srcElement;
  if (obj.value == "") {
    obj.value = obj.attributes.watermark.value;
  }
});
