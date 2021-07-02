let h1 = new Promise((resolve, reject) => {
  fetch("pages/h1.html").then((data) => resolve(data.text()));
});

let p = new Promise((resolve, reject) => {
  fetch("pages/p.html").then((data) => resolve(data.text()));
});

Promise.all([h1, p]).then((data) => {
  let str = data.join("\n");
  document.body.innerHTML = str;
});
