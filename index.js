const weather = {
  location: undefined,
  temp: null,
  desc: undefined,
  icon: null,
  main: undefined,
  humidity: null,
  windSpeed: null
};

function handleTemp(tempK) {
  if (!document.querySelector('input[type=checkbox').checked) {
    return `${Math.round(tempK - 273.15)}&#176;C`;
  }

  return `${Math.round((tempK - 273.15) * (9 / 5) + 32)}&#176;F`;
}

function handleWindSpeed(windSpeed) {
  if (!document.querySelector('input[type=checkbox').checked) {
    return `${Math.round(windSpeed * 3.6)} km/h`;
  }

  return `${Math.round(windSpeed * 2.237)} mi/h`;
}

function displayWeather() {
  document.getElementById('location').textContent = weather.location;
  document.getElementById('temp').innerHTML = handleTemp(weather.temp);
  document.getElementById('desc').textContent = weather.desc;
  document.getElementById(
    'humidity'
  ).textContent = `${weather.humidity}% humidity`;
  document.getElementById('wind-speed').textContent = handleWindSpeed(
    weather.windSpeed
  );
  document.getElementById(
    'icon-image'
  ).src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
}

async function getWeatherData() {
  try {
    const search = document.querySelector("input[type='text'");

    document.getElementById('weather-info').classList.add('loading');

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=d167055762f8de3624cba9e9eec8fb30`,
      { mode: 'cors' }
    );

    if (!response.ok) {
      throw new Error(`Location not found!`);
    }
    document.getElementById('weather-info').classList.remove('loading');

    document.getElementById('error-readout').textContent = '';

    const openWeatherData = await response.json();

    weather.temp = openWeatherData.main.temp;
    weather.location = search.value;
    weather.desc = openWeatherData.weather[0].description;
    weather.icon = openWeatherData.weather[0].icon;
    weather.humidity = openWeatherData.main.humidity;
    weather.windSpeed = openWeatherData.wind.speed;
    displayWeather();
  } catch (error) {
    document.getElementById('error-readout').textContent = error;
  }
}

getWeatherData();

document.querySelector('input[type=checkbox').addEventListener('click', () => {
  document.getElementById('temp').innerHTML = handleTemp(weather.temp);
  document.getElementById('wind-speed').textContent = handleWindSpeed(
    weather.windSpeed
  );
});

document
  .querySelector('input[type=button]')
  .addEventListener('click', getWeatherData);
