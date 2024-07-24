import React from 'react'

function Card(props) {
    
    const interacao = () => { // Essa é uma forma bem simples de tratar eventos no React.
        alert('Cliquei no botão')
      }

  return (
   <article>

        <div className='container'>
            <img src="logo192.png" alt="imagem do card"  />
            <h2>{props.title}</h2>
            <p className=''>uma pequena descrição</p>
            <a className='btn btn-dark text-white' href="https://portfolioemanuel.vercel.app/" target='_blank'>Acessar post</a>
        </div>

        <button className='btn btn-primary btn-sm mt-2' onClick={interacao}>interagir</button>

   </article>
  )
}

export default Card;