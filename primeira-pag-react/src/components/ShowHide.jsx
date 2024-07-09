import React from 'react'

function ShowHide() {
    /* ESTADOS */
    const [show, setShow] = React.useState(true); /* true ou false */
    
    /* EVENTOS (ONCLICK) */
    const handleClick = (event) => {
        setShow(!show); /* Inverte o valor de show */
        
  
    }

  return (
    <div>
        {/* Mostrar ou esconder o texto = RENDERIZADO CONDICIONAL*/}
         <button onClick={handleClick}>{show ? 'Hide' : 'Show'} Text</button>
         
        {/* Quando show for verdadeiro = Mostrar -> HIDE ME! */}
        {show && <h2>HIDE ME!</h2>}
       
    </div>
  )
}

export default ShowHide;