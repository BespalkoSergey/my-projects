let btn = document.getElementById("btn1");
let counter = 0;
let flag = true;

btn.onclick = function createNewChild() {
  let div = document.getElementById("div1");
  let pLast = div.lastChild;

  if (flag) {
    let pNew = document.createElement("p");
    pNew.innerHTML = "Hello";
    div.appendChild(pNew);
    counter++;
    console.log(counter);
    if (counter >= 10) {
      flag = false;
    }
  } else if (!flag) {
    div.removeChild(pLast);
    counter--;
    console.log(counter);
    if (counter <= 0) {
      flag = true;
    }
  }
};
