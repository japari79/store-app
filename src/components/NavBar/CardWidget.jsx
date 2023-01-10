import {useState} from "react";
import "./CardWidget.css";

function CardWidget() {
    const [bgColor, set_bgColor] = useState("btn btn-card-widget btn-warning")

    function handleClick(e){
        set_bgColor("btn btn-card-widget btn-primary")
    }

    return(
        <button onClick={handleClick} type="button" className={bgColor}>
            <span className="badge bg-secondary">4</span>
            <i className="bi bi-cart3"></i>
        </button>
    );
}

export default CardWidget;