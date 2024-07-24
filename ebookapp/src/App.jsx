import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from './components/Card'
import Hooks from './components/Hooks';


function App() {
 

  return (
    <div>
      <Card title='React' /> {/* definindo uma prop e atribuindo um valor */}
     {/* <Card title='Front-end' />  Card.jsx é filho; precisamos definr as props no pai(App.jsx) */}
     {/* <Card title='Emanuel' />  assim podemos obter o resultao acessando a prop 'title' = props.title */}

     <Hooks />
    </div> // dessa forma, podemos utilizar o codigo do Card.jsx de forma dinamica;
  )
}

export default App