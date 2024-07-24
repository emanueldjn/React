import React, { useEffect, useState } from 'react'


// HOOKS - useState
function CounterJeitoAtualizado(props) {
    const [count, setCount] = useState(0)
    
    // Para o useEffect ser carregado so uma vez 
    useEffect (() => {
        setCount(parseInt(localStorage.getItem("count")))
    }, [])

    useEffect(() => {
        document.title = count
        // Salvando na memoria
        localStorage.setItem('count', count);
    }, [count]);

    function add() {

        // Para modificar 
        setCount(count + 1); 
       
    }

    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}


export default CounterJeitoAtualizado;

/* FUNÇÃO PURA -nao tem estádo nem metodo de ciclo de vida nem construtor nao tem objeto que herda de componet */ 

// Resolvemos o problema do estado mas nao do ciclo de vida do componente 