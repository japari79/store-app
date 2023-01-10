import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail ({title, price, description, img}) {
    return (
        <div className="card card-detail">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><b>COP$ </b>{price}</h6>
                <p className="card-text">{description}</p>
                <ItemCount stock={5} />
                <a href="#" className="btn btn-warning">Agregar al carrito</a>
            </div>
        </div>
    );
}

export default ItemDetail;