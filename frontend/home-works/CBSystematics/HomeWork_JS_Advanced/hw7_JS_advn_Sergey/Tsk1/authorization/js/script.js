var person = {};
person.name = "";
person.address = "";
person.phone = "";

function validInpAuthor(e) {
  let obj = e.target;
  let value = obj.value;
  let length = obj.value.length;
  let green = "#008000";
  let red = "#ff0000";
  if (obj.name == "name") {
    let pattern = /[^a-zа-яёЁЇїІіЄєҐґ]/iu;
    if (!pattern.test(value) && length >= 3) {
      obj.style.borderColor = green;
      person.name = value;
    }
    if (pattern.test(value) || length < 3) {
      obj.style.borderColor = red;
      person.name = "";
    }
  }
  if (obj.name == "address") {
    let pattern = /[^a-zа-яёЁЇїІіЄєҐґ.,\d ]/iu;
    if (!pattern.test(value) && length >= 3) {
      obj.style.borderColor = green;
      person.address = value;
    }
    if (pattern.test(value) || length < 4) {
      obj.style.borderColor = red;
      person.address = "";
    }
  }
  if (obj.name == "phone") {
    let pattern = /^\+?(?:[()-]*\d){10}[()-]*$/;
    if (pattern.test(value)) {
      obj.style.borderColor = green;
      person.phone = value;
    }
    if (!pattern.test(value) && length > 0) {
      obj.style.borderColor = red;
      person.phone = "";
    }
  }
  if (obj.value.length < 1) {
    obj.style.borderColor = "";
  }
}

document.addEventListener("change", validInpAuthor);
