let div = document.querySelector("div");
let body = document.querySelector("body");
let counterVertical = 10;
let counterHorizontal = 10;

window.onload = function () {
  let browserHeight = window.innerHeight - 30;
  let browserWidth = window.innerWidth - 30;

  body.onkeyup = function (e) {
    let key = e.key;

    switch (key) {
      case "ArrowUp":
        if (counterVertical > 0) {
          counterVertical = counterVertical - 10;
        }
        div.style.top = `${counterVertical}px`;
        break;
      case "ArrowDown":
        if (counterVertical < browserHeight) {
          counterVertical = counterVertical + 10;
        }
        div.style.top = `${counterVertical}px`;
        break;
      case "ArrowLeft":
        if (counterHorizontal > 0) {
          counterHorizontal = counterHorizontal - 10;
        }
        div.style.left = `${counterHorizontal}px`;
        break;
      case "ArrowRight":
        if (counterHorizontal < browserWidth) {
          counterHorizontal = counterHorizontal + 10;
        }
        div.style.left = `${counterHorizontal}px`;
        break;

      default:
        alert("Используйте только стрелки на клавиатуре!");
        break;
    }
  };
};
