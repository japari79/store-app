import "./Card.css";
import {Link} from 'react-router-dom';
import Button from '../Button/Button';

function Card (props) {
    const {id, title, price, description, img} = props.item;
    
    return (
        <>
        <div className="card">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><b>COP$</b> {price}</h6>
                <p className="card-text">{description}</p>
                <Link to={`/detalle/${id}`}>
                    <Button>Ver detalle</Button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Card;