const apiKey = 'aeecd15f11edade197167ac58ccc973c'; // Вставте ваш API ключ сюди

async function getWeather() {
    const city = document.getElementById('city-input').value;
    const weatherOutput = document.getElementById('weather-output');

    if (!city) {
        weatherOutput.innerHTML = 'Please enter a city name.';
        return;
    }

    try {
        // Запит до OpenWeatherMap API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        console.log(response);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();

        // Отримання даних про погоду
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        // Формування HTML для відображення
        weatherOutput.innerHTML = `
            <h2>${data.name}</h2>
            <p>${temp}°C, ${description}</p>
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
        `;
    } catch (error) {
        weatherOutput.innerHTML = 'City not found. Please try again.';
        console.error("error");
    }
}
