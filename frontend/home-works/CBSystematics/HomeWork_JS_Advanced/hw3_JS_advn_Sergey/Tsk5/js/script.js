let button = document.getElementById("btn1");
let input = document.getElementById("ipt1");
let pre = document.getElementById("p1");
let str = "";
let flag = false;

button.onclick = function() {
  if (!flag) {
    flag = true;
    let newString = input.value;
    let counter = 0;
    setInterval(function() {
      pre.innerHTML = str + newString;
      str += "&nbsp";
      counter++;

      if (counter > 30) {
        str = "";
        counter = 0;
      }
    }, 100);
  }
};
