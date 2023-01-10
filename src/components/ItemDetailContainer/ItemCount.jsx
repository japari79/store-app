import {useState} from "react";
import './ItemCount.css'

function ItemCount(props) {
    const [count, setCount] = useState(1);

    function handleAdd(){
        setCount(count + 1);
    }
    function handleSubstrac(){
        setCount(count - 1);
    }


    return(
        <div className="item-count">    
            <button className="btn btn-warning" disabled={count ===  0} onClick={handleSubstrac}>-</button>
            <p>{count}</p>    
            <button className="btn btn-warning" disabled={count ===  props.stock} onClick={handleAdd}>+</button>   
        </div> 
    );
}

export default ItemCount;