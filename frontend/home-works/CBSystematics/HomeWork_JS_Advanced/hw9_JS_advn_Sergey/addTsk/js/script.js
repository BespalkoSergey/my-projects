let img = document.querySelectorAll("img");
let div = document.querySelectorAll("div");
let p = document.querySelectorAll("p");
let index = 0;
let stp = img.length - 1;

function rnd() {
  let rand = Math.random() * 256;
  return Math.floor(rand);
}

function setImgBorder() {
  if (index == 0) {
    img[index].style.border = `4px solid rgb(${rnd()},${rnd()},${rnd()})`;
    img[stp].style.border = "";
  }
  if(index>0){
    img[index].style.border = `4px solid rgb(${rnd()},${rnd()},${rnd()})`;
    img[index-1].style.border = "";
  }
  if(index == stp){
    index = -1;
  }
  index++;
}

function setReSizableSrc() {
  const deltaSize = 21;
  const numberImg = 4;
  let fontSize = Math.floor(window.innerWidth / numberImg / deltaSize);
  div.forEach((e) => {
    let obj = e.children;
    obj[0].textContent = obj[1].src;
  });

  //изменяемый шрифт под размер экрана, лично мое творение)
  p.forEach((e) => {
    e.style.fontSize = `${fontSize}px`;
  });
}

window.addEventListener("load", function () {
  setInterval(function name(params) {
    setImgBorder();
  }, 1000);
  setReSizableSrc();
});
window.addEventListener("resize", setReSizableSrc);
