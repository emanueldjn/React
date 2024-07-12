import React from "react"

/* COMPONENTES E PROPRIEDADES */ 
function Menu(props) {
    const listLinks = props.links.map((link, index) => <li key={index}>{link} </li>)

    return (
        <ul className='menu'>
            {listLinks}
        </ul>
    )
}

export default Menu;



// ESTADOS: vai mudar depois que a pag for carregada. SEMPRE QUE ALGO FOR MUDAR => É O ESTADO QUE VAI MUDAR.
// PROPRIEDADES não. As props é configuração inicial de um componente enquanto o estado é como ele ta naquele momento.