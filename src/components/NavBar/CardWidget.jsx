import {useState, useContext} from "react";
import "./CardWidget.css";
import { cartContext } from "../../storage/cartContext";

function CardWidget() {
    const [bgColor, set_bgColor] = useState("btn btn-card-widget btn-warning")

    const contex = useContext(cartContext);
 
    function handleClick(e){
        set_bgColor("btn btn-card-widget btn-primary")
    }

    return(
        <button onClick={handleClick} type="button" className={bgColor}>
            <span className="badge bg-secondary">
                { contex.cart.length }
            </span>
            <i className="bi bi-cart3"></i>
        </button>
    );
}

export default CardWidget;