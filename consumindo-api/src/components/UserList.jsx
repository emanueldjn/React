// rfce
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



function UserList() {
    // Criando constante que vai retornar o array e iniciar com array vazio pq chegar da API
    const [usuario, setUsuario] = useState([])
    // constante de carregamento para ter o efeito de load
    const [loading, setLoading] = useState(true)

    // Iniciar o useEffect com o axios da API
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsuario(response.data);
            setLoading(false);
        }) // catch - se der erro, ele vai retornar o erro
        .catch(error => {
            console.log(error);
            setLoading(false);
        })
    }, []) // array que sempre vai verificar as requisições 

    if(loading) {
        return (
            <div>Carregando...</div>
        )
    }


  return (
    <div>
        <h1>Lista de usuarios</h1>
        <ul>
            {usuario.map(user => (
                <div key={user.div}>
                    <li>{user.name}</li>
                    <li>{user.phone}</li>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default UserList;