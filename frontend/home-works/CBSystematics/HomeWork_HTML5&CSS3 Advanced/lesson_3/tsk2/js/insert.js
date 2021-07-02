const insert = (jsn) => {
  let arr = JSON.parse(jsn);
  arr[0] += arr[1];
  return JSON.stringify(arr[0]);
};

onmessage = function (e) {
  postMessage(insert(e.data));
};
