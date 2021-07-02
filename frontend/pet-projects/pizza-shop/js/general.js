function setPage(event, flag) {
  if (flag) {
    let href = "pages/main.html";
    getFetch(href);
    return true;
  }
  let obj = event.target;
  let href = false;
  if (obj.hasAttribute("data-href")) {
    href = obj.dataset.href;
  }
  if (obj.parentNode.hasAttribute("data-href")) {
    href = obj.parentNode.dataset.href;
  }
  if (href) {
    getFetch(href);
  }
  function getFetch(url) {
    fetch(url)
      .then((data) => data.text())
      .then((data) => {
        let mainPage = document.querySelector(".main-page");
        mainPage.innerHTML = data;
      });
  }
}

document.addEventListener("click", function (e) {
  setPage(e, false);
});
window.addEventListener("load", function (e) {
  setPage(e, true);
});
