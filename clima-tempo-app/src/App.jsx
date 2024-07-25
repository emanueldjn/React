import { useState, useRef } from 'react' // Quando queremos colocar informacoes na tela utilizamos ESTADOS useState
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import WeatherInfo5Days from './components/Weather5Days/WeatherInfo5Days'

function App() {
  // setWeather é a funcao para colocar o valor na variavel
  const [weather, setWeather] = useState() // valor inicial objeto vazio e dps completa as infos q chega da API
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "4aa5e2e3eb03a58dba148dc402b69c01"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric` // chamada assincrona/promisse demora meio segundo para fazer requisição por isso tem que colocar o 'await axios.get()'
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    // a forma que acessa o servido é o (get) - chamada api
    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    
    setWeather(apiInfo.data) // seta as informacoes do clima na variavel weather e bota na tela que esta dentro de 'data'
    setWeather5Days(apiInfo5Days.data)

    
  }

  return (
    <div className='container'>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button> {/* quando clicar no botão pegar as info de input*/}

      {weather && <WeatherInfo weather={weather}/>}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days}/>}
    </div>

    
  )
}

export default App