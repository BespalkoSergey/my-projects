let divText = document.querySelector(".text");
let buttons = document.querySelectorAll("button");
let buttonUP = buttons[1];
let buttonDOWN = buttons[3];
let buttonLEFT = buttons[0];
let buttonRIGHT = buttons[2];
let counterVertical = 100;
let counterHorizontal = 100;

window.onload = function() {
  let browserHeight = window.innerHeight - 200;
  let browserWidth = window.innerWidth - 200;

  buttonUP.onclick = function() {
    if (counterVertical > 0) {
      counterVertical = counterVertical - 100;
    }
    divText.style.top = `${counterVertical}px`;
  };

  buttonDOWN.onclick = function() {
    if (counterVertical < browserHeight) {
      counterVertical = counterVertical + 100;
    }
    divText.style.top = `${counterVertical}px`;
  };

  buttonLEFT.onclick = function() {
    if (counterHorizontal > 0) {
      counterHorizontal = counterHorizontal - 100;
    }
    divText.style.left = `${counterHorizontal}px`;
  };

  buttonRIGHT.onclick = function() {
    if (counterHorizontal < browserWidth) {
      console.log(counterHorizontal);
      counterHorizontal = counterHorizontal + 100;
      console.log(counterHorizontal);
    }
    divText.style.left = `${counterHorizontal}px`;
  };
};
