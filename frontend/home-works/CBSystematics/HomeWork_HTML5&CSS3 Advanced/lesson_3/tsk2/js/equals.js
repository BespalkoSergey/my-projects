const equals = (jsn) => {
  let str = JSON.parse(jsn)[0];
  let tempStr = str;
  if (str.match(/\d+[!]/g)) {
    let num = str.match(/\d+[!]/g);
    num.forEach((element) => {
      let fact = `${factorial(
        parseInt(element.substring(0, element.length - 1))
      )}`;
      tempStr = tempStr.replace(element, fact);
    });
  }
  tempStr = eval(tempStr);
  return tempStr;
};

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

onmessage = function (e) {
  postMessage(equals(e.data));
};
