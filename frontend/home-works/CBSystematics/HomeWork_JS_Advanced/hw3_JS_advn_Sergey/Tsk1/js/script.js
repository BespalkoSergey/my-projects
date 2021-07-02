let startBtn = document.getElementsByTagName("button")[0];
let stopBtn = document.getElementsByTagName("button")[1];
let clearBtn = document.getElementsByTagName("button")[2];
let outer = document.getElementsByClassName("outer")[0];
let seconds, minutes, hours, handler;
let flag = "free";

function zeroing() {
  seconds = 0;
  minutes = 0;
  hours = 0;
}

zeroing();

function toStr(seconds, minutes, hours) {
  let parsedSeconds = function() {
    if (seconds < 10) return `0${seconds}`;
    return `${seconds}`;
  };
  let parsedMinutes = function() {
    if (minutes < 10) return `0${minutes}`;
    return `${minutes}`;
  };
  let parsedHours = function() {
    if (hours < 10) return `0${hours}`;
    return `${hours}`;
  };
  return `${parsedHours()}:${parsedMinutes()}:${parsedSeconds()}`;
}

outer.innerHTML = toStr(seconds, minutes, hours);

startBtn.onclick = function() {
  if (flag == "free") {
    flag = "busy";
    handler = setInterval(function() {
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
      if (hours == 24) {
        zeroing();
      }
      outer.innerHTML = toStr(seconds, minutes, hours);
    }, 1000);
  }
};

stopBtn.onclick = function() {
  clearInterval(handler);
  flag = "free";
};

clearBtn.onclick = function() {
  zeroing();
  outer.innerHTML = toStr(seconds, minutes, hours);
};
