function getElementsWeather(obj) {
  let objIcon = obj.weather[0]["icon"];
  let href = `https://openweathermap.org/img/wn/${objIcon}@2x.png`;
  let img = document.querySelector(".weather-icon");
  let out = document.querySelectorAll("span[class^=data-weather]");
  let tmp = obj.main.temp - 273;
  let flLk = obj.main.feels_like - 273;
  let mnTemp = obj.main.temp_min - 273;
  let mxTemp = obj.main.temp_max - 273;
  let snrUnx = new Date(obj.sys.sunrise * 1000)
    .toUTCString()
    .slice(-12, -7)
    .split(":");
  let snsUnx = new Date(obj.sys.sunset * 1000)
    .toUTCString()
    .slice(-12, -7)
    .split(":");
  snrUnx[0] = (parseInt(snrUnx[0]) + 3).toString();
  snsUnx[0] = (parseInt(snsUnx[0]) + 3).toString();
  img.src = href;
  out[0].innerHTML = obj.city;
  out[1].innerHTML = `${Math.round(tmp)}&deg;`;
  out[2].innerHTML = `${Math.round(flLk)}&deg;`;
  out[3].innerHTML = `<sub>min</sub> ${Math.round(mnTemp)}&deg;`;
  out[4].innerHTML = `<sub>max</sub> ${Math.round(mxTemp)}&deg;`;
  out[5].innerHTML = snrUnx.join(":");
  out[6].innerHTML = snsUnx.join(":");
}

function getWeather(obj) {
  let lat = `lat=${obj.lat}`;
  let lon = `lon=${obj.lon}`;
  let id = "appid=0c5ecc7a72b7e758560d28131ea1ec97";
  let url = `http://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&${id}`;
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      data.city = obj.city;
      getElementsWeather(data);
    });
}

function getIp(task) {
  fetch("http://ip-api.com/json")
    .then((data) => data.json())
    .then((data) => task(data));
}

getIp(getWeather);
