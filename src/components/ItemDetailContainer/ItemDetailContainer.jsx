import {useState, useEffect, useContext} from "react";
import {GetProductDetail} from '../../services/firebaseDB';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import Flex from '../Flex/Flex';
import { cartContext } from "../../storage/cartContext";
import Loader from '../Loader/Loader';

function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [msgText, setMsgText] = useState();
    const [isInCar, setIsInCart] = useState(false);
    
    let {item} = useParams();

    const {addToCart} = useContext(cartContext);

    useEffect(()=> {
        GetProductDetail(item)
            .then(
                (resp) => {
                    setProduct(resp);
                }
            )
            .catch(error => setMsgText(error))
            .finally(
                () => setIsLoading(false)
            )
    },[]);

    function handleAddToCart(quantity) {
        setIsInCart(true);
        const productCount = {...product, quantity : quantity}
        addToCart(productCount);
    }

    return (
        <>
            {
                isLoading ?
                    <Loader />
                :
                <Flex>
                    {msgText && <div>{ msgText }</div>}
                    <Flex>
                        {
                            <ItemDetail isInCar={isInCar} onAddToCart={handleAddToCart} title={product.title} price={product.price} category={product.category} description={product.description} img={product.img} stock={product.stock} />
                        }
                    </Flex>
                </Flex>    
            }
        </>
    );
}

export default ItemDetailContainer;