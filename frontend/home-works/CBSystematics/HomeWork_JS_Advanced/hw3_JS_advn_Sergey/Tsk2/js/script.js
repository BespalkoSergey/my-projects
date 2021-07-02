let getId = function(id) {
  return document.getElementById(id);
};

function getString() {
  let args = {};
  let query = location.search.substring(1);
  let pairs = query.split("&");

  for (let i = 0; i < pairs.length; i++) {
    let pos = pairs[i].indexOf("=");
    if (pos == -1) {
      continue;
    }

    let argname = pairs[i].substring(0, pos);
    let value = pairs[i].substring(pos + 1);
    args[argname] = value;
  }
  return args;
}

function print() {
  let args = getString();
  let keys = Object.keys(getString());
  let p = document.createElement("p");

  function sum() {
    let operandA = parseInt(args[`${keys[0]}`]);
    let operandB = parseInt(args[`${keys[1]}`]);
    return operandA + operandB;
  }

  p.innerHTML = `${keys[0]} = ${args[`${keys[0]}`]}<br/>`;
  p.innerHTML += `${keys[1]} = ${args[`${keys[1]}`]}<br/>`;
  p.innerHTML += `${keys[0]}+${keys[1]}= ${sum()}`;

  getId("div1").appendChild(p);
}

getId("btn1").onclick = () => {
  print();
};
