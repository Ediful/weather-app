/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const weather = {\n  location: undefined,\n  temp: null,\n  desc: undefined,\n  icon: null,\n  main: undefined,\n  humidity: null,\n  windSpeed: null\n};\n\nfunction displayWeather() {\n  document.getElementById('location').textContent = weather.location;\n  document.getElementById('temp').textContent = weather.temp;\n  document.getElementById('desc').textContent = weather.desc;\n  document.getElementById('main').textContent = weather.main;\n  document.getElementById('humidity').textContent = weather.humidity;\n  document.getElementById('wind-speed').textContent = weather.windSpeed;\n  document.getElementById(\n    'icon-image'\n  ).src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;\n}\n\nasync function getWeatherData() {\n  try {\n    const search = document.querySelector(\"input[type='text'\");\n\n    const response = await fetch(\n      `http://api.openweathermap.org/data/2.5/weather?q=${search.value}&APPID=d167055762f8de3624cba9e9eec8fb30`,\n      { mode: 'cors' }\n    );\n\n    const openWeatherData = await response.json();\n\n    weather.temp = openWeatherData.main.temp;\n    weather.location = search.value;\n    weather.desc = openWeatherData.weather[0].description;\n    weather.icon = openWeatherData.weather[0].icon;\n    weather.main = openWeatherData.weather[0].main;\n    weather.humidity = openWeatherData.main.humidity;\n    weather.windSpeed = openWeatherData.wind.speed;\n    displayWeather();\n  } catch {\n    console.log('woops');\n  }\n}\n\ngetWeatherData();\n\ndocument\n  .querySelector(\"input[type='button']\")\n  .addEventListener('click', getWeatherData);\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;