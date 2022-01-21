const weather = {
  location: undefined,
  temp: null,
  desc: undefined,
  icon: null,
  main: undefined,
  humidity: null,
  windSpeed: null
};

function displayWeather() {
  document.getElementById('location').textContent = weather.location;
  document.getElementById('temp').textContent = weather.temp;
  document.getElementById('desc').textContent = weather.desc;
  document.getElementById('main').textContent = weather.main;
  document.getElementById('humidity').textContent = weather.humidity;
  document.getElementById('wind-speed').textContent = weather.windSpeed;
  document.getElementById(
    'icon-image'
  ).src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
}

async function getWeatherData() {
  try {
    const search = document.querySelector("input[type='text'");

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=d167055762f8de3624cba9e9eec8fb30`,
      { mode: 'cors' }
    );

    const openWeatherData = await response.json();

    weather.temp = openWeatherData.main.temp;
    weather.location = search.value;
    weather.desc = openWeatherData.weather[0].description;
    weather.icon = openWeatherData.weather[0].icon;
    weather.main = openWeatherData.weather[0].main;
    weather.humidity = openWeatherData.main.humidity;
    weather.windSpeed = openWeatherData.wind.speed;
    displayWeather();
  } catch {
    console.log('woops');
  }
}

getWeatherData();

document
  .querySelector("input[type='button']")
  .addEventListener('click', getWeatherData);
