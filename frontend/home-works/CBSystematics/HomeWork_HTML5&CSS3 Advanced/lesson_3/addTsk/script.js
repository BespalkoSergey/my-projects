const video = document.querySelector("video");
const track = document.querySelector(".track-bar");
const play = document.querySelector("#play");
const backward = document.querySelector(".fa-fast-backward");
const forward = document.querySelector(".fa-fast-forward");
const volPlus = document.querySelector(".fa-volume-up");
const volMin = document.querySelector(".fa-volume-down");
const mute = document.querySelector(".fa-volume-mute");
const stp = document.querySelector(".fa-stop");
const fullScr = document.querySelector(".fa-expand-arrows-alt");
const btns = document.querySelector(".btns");
const toggling = () => {
  play.classList.toggle("active");
  play.classList.toggle("fa-play");
  play.classList.toggle("fa-pause");
};
let percent = 0;

play.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    toggling();
  } else {
    video.pause();
    toggling();
  }
});

forward.addEventListener("click", () => {
  video.currentTime += 10;
});

backward.addEventListener("click", () => {
  video.currentTime -= 10;
});

stp.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  if (play.classList.contains("fa-pause")) {
    toggling();
  }
});

volPlus.addEventListener("click", () => {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
});

volMin.addEventListener("click", () => {
  if (video.volume > 0.1) {
    video.volume -= 0.1;
  }
});

mute.addEventListener("click", () => {
  if (video.volume === 0) {
    video.volume = 1;
  } else {
    video.volume = 0;
  }
});

fullScr.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});

video.addEventListener("pause", () => {
  if (play.classList.contains("fa-pause")) {
    toggling();
  }
});

video.addEventListener("timeupdate", () => {
  percent = (video.currentTime * 100) / video.duration;
  percent = Math.round(percent * 1000) / 1000;
  track.style.width = `${percent}%`;
});

btns.addEventListener("click", (e) => {
  const src = e.target.dataset.src;
  track.style.width = `0%`;
  if (src) {
    video.children[0].src = src;
    video.load();
  }
  if (play.classList.contains("fa-pause")) {
    toggling();
  }
});

window.addEventListener("beforeunload", () => {
  video.pause();
  let temp = video.children[0].src;
  temp = temp.substr(temp.indexOf("video/"), temp.length);
  localStorage.setItem("src", temp);
  localStorage.setItem("currentTime", video.currentTime);
});

window.addEventListener("load", () => {
  if (localStorage.getItem("src")) {
    video.children[0].src = localStorage.getItem("src");
    video.currentTime = parseInt(localStorage.getItem("currentTime"));
    video.load();
    if (play.classList.contains("fa-pause")) {
      toggling();
    }
  } else {
    video.children[0].src = "video/moon.mp4";
  }
});
