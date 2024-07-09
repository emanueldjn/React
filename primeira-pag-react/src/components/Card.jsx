import './Card.css'


function Card({title ='titulo por defecto', descripcion= 'descripcion por defecto'}) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <p>{descripcion}</p>
        </div>
    )
}

export default Card;