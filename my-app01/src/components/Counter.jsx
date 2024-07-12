import React from 'react';

class Counter extends React.Component {
    /* ALTERANDO O 'COUNTER: 1' */
    constructor(props) {
        super(props) 
        this.add = this.add.bind(this)
        /* CRIANDO O ESTADO PARA ATUALIZAR A TELA */
        this.state = {count: 1}
    }
    

    /* METÓDO ADD */ 
    add() {
         /* ATUALIZANDO O ESTADO */
        // this.setState({count: this.state.count + 1})  /* ALTERANDO O 'COUNTER: 1' */
        this.setState((state) => { return {count: state.count +1} })
    }

    render () {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Counter;

/* SEMPRE QUE FOR MODIFICAR ALGO NA TELA, VAI MODIFICAR O ESTADO QUE CONTROLA AQUELA COISA */


/* TODA LOGICA DE MANIPULAÇÃO DA TELA DO REACT SENDO FEITA POR ALGUM IMPUT DO USUARIO 
VAI SER FEITA ATRAVÉS DA ALTERAÇÃO DO ESTADO DAQUELE COMPONENTE */ 