import React from 'react';
import './WeatherInfo.css'



// weather = enviando os valores 
function WeatherInfo({ weather }) {
  // console.log(weather)
  
  return (
    <div className='weather-container'>
      <h2 >{weather.name}</h2>
      
      <div className='weather-info'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='Weather Icon' />
        <p className='temperatura'>{Math.round(weather.main.temp)}°C</p>
      </div>
      
      <p className='description'>{weather.weather[0].description}</p>

      <div className='detalhes'>
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade: {weather.main.humidity}</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default WeatherInfo;