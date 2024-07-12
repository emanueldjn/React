// Criação de um componente 
// .map pegar o item do array e iterar

import React from 'react'
import Menu from './Menu'
import '../App.css';

/* COMPONENTES E PROPRIEDADES */ 
function Header(props) {
    return (
        <header className='header'>
            <h1>{props.name}</h1>
            <Menu links={props.links}/>
        </header>
    )
}

/* TRANSFORMANDO A FUNCTION EM UMA CLASS */ 

/* a classe é um modelo de um objeto. Ela tem seu métodos e suas propriedades(!= do props)
// preciso de um método dentro do componente que redenderize o componente em si

 
class Header extends React.Component {
    // Criar um construtor do Header
    constructor(props) {
        super(props); // chamando o construtor da classe pai
    }

    render() {
        <header className='header'>
            <h1>{this.props.name}</h1>
            <Menu links={this.props.links}/>
        </header>
    }
}
*/


export default Header