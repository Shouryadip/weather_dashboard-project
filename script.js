const apiKey = '7ca5203964950790d9d6be3d40fed908';

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('weatherResult');
  
  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error('City not found');
      return response.json();
    })
    .then(data => {
      result.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      result.innerHTML = `Error: ${error.message}`;
    });
}
