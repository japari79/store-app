import {useState, useEffect} from "react";
import {GetProductDetail} from '../../services/svcProducts';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import Flex from '../Flex/Flex';

function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    
    let {item} = useParams();

    useEffect(()=> {
        GetProductDetail(item).then(
            (resp) => {
                setProduct(resp);
            }
        ).catch(error => alert(error))
    },[]);

    return (
        <Flex>
            {
                <ItemDetail title={product.title} price={product.price} category={product.category} description={product.description} img={product.img} />
            }
        </Flex>
        
    );
}

export default ItemDetailContainer;