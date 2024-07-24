import { useState } from 'react';
import './App.css';

function App() {

  const [newTaskName, setNewTaskName] = useState() // primeiro uma variavel e dps - setFunção

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('taks', newTaskName)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a new tark' onChange={(e) => setNewTaskName(e.target.value)}/> {/* Recebendo entrada do usuario  - onChange qdo o valor de input muda - setNewTask...*/}
        <button>Add Task</button> {/* Botão para adicionar a tarefa - onClick para funcao evento*/}
      </form>
    </div>
  );
}

export default App;
