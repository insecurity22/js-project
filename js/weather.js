const API_KEY = "6ec214d70bb815733526b6f649ce0fc5";

function onGeoOk(position) {
  // 위도, 경도 얻기
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      // 몇 도까지 출력하려면 weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
  console.log(url);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
