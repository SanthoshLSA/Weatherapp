const API_KEY = '8886d1f2a66bbebec4dddacac2a2c890'; 
async function getWeather(city) { 
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    document.getElementById("cityName").textContent = data.name;
    document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById("temperature").textContent = `${data.main.temp}°C`; 
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

const changeCityBtn = document.getElementById("changeCityBtn");
if (changeCityBtn) {
    changeCityBtn.addEventListener('click', () => {
        let newCity = prompt('Enter a new city:');
        getWeather(newCity); 
        
    });
}
