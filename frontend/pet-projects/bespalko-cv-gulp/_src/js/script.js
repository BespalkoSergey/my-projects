let btn = document.querySelector(".nav-btn");
let nav = document.querySelector(".nav-list");
let links = document.querySelectorAll(".nav-list li");
let spoiler = document.querySelector(".spoiler");
let tempSpoiler = document.querySelector(".spoiler-item-active");
let svgPath = document.querySelectorAll("#screen-start-svg path");
let widthRem = `${Math.round((window.innerWidth / 16) * 100) / 100}rem`;

let numDelay = 0;
for (let i = 0; i < 34; i++) {
  if (i >= 17) {
    svgPath[
      i
    ].style.animation = `line-anim 1.5s ease forwards ${(numDelay += 0.1)}s, fill 1.5s ease-in forwards 3s`;
  } else {
    svgPath[i].style.animation = `fill 1.5s ease-in forwards 3s`;
  }
  svgPath[i].style.strokeDasharray = svgPath[i].getTotalLength();
  svgPath[i].style.strokeDashoffset = svgPath[i].getTotalLength();
}

function createClass(name, rules) {
  let style = document.createElement("style");
  style.type = "text/css";
  document.getElementsByTagName("head")[0].appendChild(style);
  if (!(style.sheet || {}).insertRule)
    (style.styleSheet || style.sheet).addRule(name, rules);
  else style.sheet.insertRule(name + "{" + rules + "}", 0);
}

createClass(".widthRem", `width: ${widthRem};`);

btn.addEventListener("click", () => {
  window.innerWidth < 540
  ? nav.parentNode.classList.toggle("widthRem")
  : nav.parentNode.classList.toggle("widthDesctop");
  btn.classList.toggle("nav-btn-active");
  document.body.classList.toggle("lock-scroll");
});

nav.addEventListener("click", () => {
  window.innerWidth < 540
    ? nav.parentNode.classList.toggle("widthRem")
    : nav.parentNode.classList.toggle("widthDesctop");
  btn.classList.toggle("nav-btn-active");
  document.body.classList.toggle("lock-scroll");
});

spoiler.addEventListener("click", (e) => {
  let parent = e.target.parentNode;
  let parentCsLst = parent.classList;
  if (parentCsLst.contains("spoiler-item")) {
    tempSpoiler.classList.remove("spoiler-item-active");
    parentCsLst.add("spoiler-item-active");
    tempSpoiler = parent;
  }
});
