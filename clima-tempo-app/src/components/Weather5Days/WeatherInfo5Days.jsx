import React from 'react';
import './WeatherInfo5Days.css'

function WeatherInfo5Days({ weather5Days }) {
    console.log(weather5Days);

    let dailyForecast = {};

    // Agrupa previsões por data
    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        console.log(date);

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }

    // Transforma dailyForecast em array
    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' });
        return newDate;
    }

    return (
        <div className='weather-container'>
            <h3>Previsão proximos 5 dias</h3>
            <div className='weather-list'>
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='forecast-day'>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='Weather Icon' />
                        <p className='forecast-descrip'>{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C máx</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherInfo5Days;