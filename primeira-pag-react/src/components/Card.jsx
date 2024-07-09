import './Card.css'
import { Link } from 'react-router-dom';


function Card({title ='titulo por defecto', descripcion= 'descripcion por defecto'}) {
    return (
        <div className="Card">
            <Link to={title}><h2>{title}</h2> </Link>
            <p>{descripcion}</p>
        </div>
    )
}

export default Card;