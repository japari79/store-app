import "./CardWidget.css";

function CardWidget() {
    return(
        <button type="button" class="btn btn-card-widget btn-warning">
            <span class="badge bg-secondary">4</span>
            <i class="bi bi-cart3"></i>
        </button>
    );
}

export default CardWidget;