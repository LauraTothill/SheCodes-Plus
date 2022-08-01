function citySearch(event) {
  event.preventDefault();
  let cityName = document.querySelector("#city-search");
  let cityTitle = document.querySelector("#city");
  cityTitle.innerHTML = `Current temperature in ${cityName.value}`;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric`;
  let apiKey = "df2aecacaa6e59b5f396fc768f18b396";
  axios.get(`${apiURL}&appid=${apiKey}`).then(showTemp);
}

function getDateTime() {
  let currentDate = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[currentDate.getDay()];
  let hour = currentDate.getHours();
  let minute = currentDate.getMinutes();
  let date = document.querySelector("#date-time");
  date.innerHTML = `${day} ${hour}:${minute}`;
}

function showTemp(response) {
  let mainTemp = document.querySelector("#main-temp");
  let maxMinTemp = document.querySelector("#max-min-temp");
  let maxTemp = Math.round(response.data.main.temp_max);
  let minTemp = Math.round(response.data.main.temp_min);
  let currentTemp = Math.round(response.data.main.temp);
  mainTemp.innerHTML = `${currentTemp}°C`;
  maxMinTemp.innerHTML = `${maxTemp}°C/${minTemp}°C`;
  console.log(response);
}

//
getDateTime();
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);
