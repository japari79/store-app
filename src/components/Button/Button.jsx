function Button(props) {
    return(
        <button disabled={props.disabled} onClick={props.onClick} type={props.type} className="btn btn-warning btn-detail">
            {props.children}
        </button>
    );
}

export default Button;