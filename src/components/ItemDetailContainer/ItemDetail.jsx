import ItemCount from './ItemCount';
import './ItemDetail.css';

function ItemDetail ({title, price, description, img, onAddToCart, isInCar, stock}) {
    return (
        <div className="card card-detail">
            <img src={img} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted"><b>COP$ </b>{price}</h6>
                <p className="card-text">{description}</p>
                {
                    isInCar ? 
                        <div className="msg-success">El producto ha sido agregado al carrito de compras!</div>
                    :
                    <ItemCount stock={stock} onAddToCart={onAddToCart} />
                }
            </div>
        </div>
    );
}

export default ItemDetail;