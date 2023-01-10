import Card from '../Card/Card';
import Flex from '../Flex/Flex';
import {useState, useEffect} from "react";
import GetProducts, { GetProductByCategory } from '../../services/svcProducts';
import {useParams} from 'react-router-dom';


function ItemListContainer(greeting){
    const [products, setProducts] = useState([]);
    
    let {categoryid} = useParams();

    useEffect(()=> {
        if(!categoryid) {
            GetProducts().then(
                (resp) => {
                    setProducts(resp);
                }
            ).catch(error => alert(error));
        }else{
            GetProductByCategory(categoryid)
                .then((resp) => {
                    setProducts(resp);
                }
            ).catch(error => alert(error));
        }
    },[categoryid]);

    return(
        <>
            <p>{greeting.title}</p>
            <Flex>
                {
                    products.map( (item) => <Card id={item.id} key={item.id} item={item} />)
                }
            </Flex>
        </>
    );
}

export default ItemListContainer;