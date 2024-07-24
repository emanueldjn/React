import React, { useState, useEffect } from 'react';

function Hooks() {
  // Inicializa o estado 'color' com o valor 'vermelho'
  const [color, setColor] = useState('Vermelho');

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes!`;
  })


  
  // API
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    async function carregaRepositorios() {
        const resposta = await fetch(
            'https://api.github.com/users/emanueldjn/repos'
        );
        const respositorios = await resposta.json()
    }
    carregaRepositorios();
  }, []);
  
  

  return (
    <div>
        {/* useState */}
      <h1>Minha cor favorita é {color}</h1>
      <button className='btn btn-secondary' onClick={() => setColor('Azul')}>  {/* Atualiza o estado 'color' para 'Azul' ao clicar no botão */}
        Mudar para azul
      </button>

      <button className='btn btn-danger m-2' onClick={() => setColor('Vermelho')}>voltar para vermelho</button>

        {/* useEffect */}
      <p>Voce clicou {count} vezes</p>
      <button className='btn btn-info ' onClick={() => setCount(count + 1 )}> Add </button>
      <button className='btn btn-info m-2' onClick={() => setCount(count - 1 )}> Tirar </button>
    </div>
  );
}

export default Hooks;
