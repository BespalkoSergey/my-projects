function createElement(element,number,color) {
  let tempElement = document.createElement(element);
  tempElement.textContent = number;
  tempElement.style.backgroundColor = color;
  return tempElement;
};

let container = document.getElementsByClassName("container")[0];
let divOne = createElement("div",1,"rgb(255 0 0)");
let divTwo = createElement("div",2,"rgb(0 255 0)");
let divThree = createElement("div",3,"rgb(0 0 255)");

function pushingElemetsToArray() {
  let tempArray = []
  for (let i = 0; i < arguments.length; i++) {
    tempArray.push(arguments[i]);
  }
  return tempArray;
}

function randomInteger() {
  let rand = 1 + Math.random() * 3;
  return Math.floor(rand);
}

function creatingPositionArray() {
  let tempArray = [];
  let mySet = new Set();
  while (mySet.size < 3) {
    let temp = randomInteger();
    mySet.add(temp);
  }
  function addtoArray(values) {
    tempArray.push(values);
  }
  mySet.forEach(addtoArray);
  return tempArray;
}

function sortingArrayDivs(arrDivs, arrPos) {
  let tempArr = [];
  for (elem in arrPos) {
    let tempIndex = arrPos[elem] - 1;
    tempArr.push(arrDivs[tempIndex]);
  }
  return tempArr;
}

window.onload = function() {
  let tempArrayDivs = pushingElemetsToArray(divOne, divTwo, divThree);
  setInterval(function() {
    let arrayPositions = creatingPositionArray();
    let sortedTempArrayDivs = sortingArrayDivs(tempArrayDivs, arrayPositions);
    container.innerHTML = "";
    container.appendChild(sortedTempArrayDivs[0]);
    container.appendChild(sortedTempArrayDivs[1]);
    container.appendChild(sortedTempArrayDivs[2]);
  }, 1000);
};
