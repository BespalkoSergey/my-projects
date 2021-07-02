let description = document.getElementsByClassName("description")[0];
let input = document.getElementsByClassName("inner")[0];
let button = document.getElementsByTagName("button")[0];
let newParagraph = document.createElement("p");
newParagraph.style.paddingTop = "30px";
let numberWeNeedToGuess = Math.floor(Math.random() * 101);
let green = "rgb(0 255 0)";
let red = "rgb(255, 0, 0)";
let grey = "rgb(128, 128, 128)";

function newParagraphWrite(string) {
  newParagraph.textContent = string;
  description.appendChild(newParagraph);
}

function setColor(color) {
  newParagraph.style.color = color;
  button.style.color = color;
  input.style.color = color;
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

button.onclick = function() {
  let inputValue = parseInt(input.value);

  if (0 < inputValue && inputValue < 101) {
    if (inputValue == numberWeNeedToGuess) {
      newParagraphWrite("Загаданное значение угадано вами");
      flagBasedRendering("green");
    }
    if (inputValue < numberWeNeedToGuess) {
      newParagraphWrite("Загаданное значение больше введенного вами");
      flagBasedRendering("grey");
    }
    if (inputValue > numberWeNeedToGuess) {
      newParagraphWrite("Загаданное значение меньше введенного вами");
      flagBasedRendering("grey");
    }
  } else {
    newParagraphWrite("Значение введенное вами, вне загаданного диапазона");
    flagBasedRendering("red");
  }
};
