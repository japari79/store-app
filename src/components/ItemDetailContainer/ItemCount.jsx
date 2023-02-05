import {useState} from "react";
import './ItemCount.css';
import Button from "../Button/Button";


function ItemCount(props) {
    const [count, setCount] = useState(1);

    function handleAdd(){
        if(count < props.stock) {
            setCount(count + 1);
        }
    }

    function handleSubstrac(){
        if(count >=2) {
            setCount(count - 1);
        }
    }


    return(
        <>
            <div className="item-count">    
                <Button disabled={count ===  0} onClick={handleSubstrac}>-</Button>
                <p>{count}</p>    
                <Button disabled={count ===  props.stock} onClick={handleAdd}>+</Button>   
            </div>
            <div className="item-count">
                <Button onClick={() => props.onAddToCart(count)}>Agregar producto al carrito</Button>
            </div>
        </>
    );
}

export default ItemCount;