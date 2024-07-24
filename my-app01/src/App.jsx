import React from 'react';
import Header from './components/Header';
import Counter from './components/Counter';
import CounterJeitoAtualizado from './components/CounterJeitoAtualizado';
import './App.css'

function App() {
  return (
    <div>
      {/* LISTAS EM UM COMPONENTE */}
      <Header name="ProgBR" links={["Sobre", "Comprar", "Contato", "Login"]} />
      <CounterJeitoAtualizado/>
    </div>
  )
}

export default App
