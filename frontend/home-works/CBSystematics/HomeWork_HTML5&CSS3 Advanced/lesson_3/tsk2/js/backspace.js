const backspace = (jsn) => {
  let arr = JSON.parse(jsn);
  let str = arr[0].substring(0, arr[0].length - 1);
  return JSON.stringify(str);
};

onmessage = function (e) {
  postMessage(backspace(e.data));
};
