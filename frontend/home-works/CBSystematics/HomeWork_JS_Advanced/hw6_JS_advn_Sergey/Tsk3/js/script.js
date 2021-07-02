let button = document.querySelector("button");
let body = document.querySelector("body");
let maxWidth;
let maxHeight;

window.onload = function (e) {
  maxHeight = window.innerHeight - 30;
  maxWidth = window.innerWidth - 30;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.onmouseover = function () {
  this.style.top = getRandomInt(0, maxHeight) + "px";
  this.style.left = getRandomInt(0, maxWidth) + "px";
};
