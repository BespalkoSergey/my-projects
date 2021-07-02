let divBox = document.getElementsByClassName("box");
let button = document.getElementsByTagName("button")[0];
let index = 0;
let firstItem = 0;
let lastItem = divBox.length - 1;

button.onclick = function() {
  divBox[index].style.backgroundColor = "rgb(255 0 0)";
  if (index > firstItem)
    divBox[index - 1].style.backgroundColor = "rgb(0 255 0)";
  if (index == firstItem)
    divBox[lastItem].style.backgroundColor = "rgb(0 255 0)";
  index++;
  if (index > lastItem) index = firstItem;
};
