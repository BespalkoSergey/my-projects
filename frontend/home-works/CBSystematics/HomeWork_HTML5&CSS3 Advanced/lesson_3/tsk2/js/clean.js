const clean = () => {
    return JSON.stringify("");
};

onmessage = function (e) {
  postMessage(clean());
};
