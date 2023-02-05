import Card from '../Card/Card';
import Flex from '../Flex/Flex';
import { useState, useEffect } from "react";
import { GetProductByCategory } from '../../services/firebaseDB';
import { GetProducts } from '../../services/firebaseDB';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer(greeting){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [msgText, setMsgText] = useState();

    let {categoryid} = useParams();

    useEffect(()=> {
        if(!categoryid) {
            GetProducts()
                .then(
                    (resp) => {
                        setProducts(resp);
                    })
                .catch(error => {
                    setMsgText(error)
                })
                .finally(
                    () => setIsLoading(false)
                );
        }else{
            GetProductByCategory(categoryid)
                .then((resp) => {
                    setProducts(resp);
                    })
                .catch(error => {
                    setMsgText(error)
                })
                .finally(
                    () => setIsLoading(false)
                );
        }
    },[categoryid]);

    return(
        <>
            <p>{greeting.title}</p>
            {
                isLoading ?
                    <Loader />
                :
                <Flex>
                    {msgText && <div>{ msgText }</div>}
                    <Flex>
                        {
                            products.map( (item) => <Card id={item.id} key={item.id} item={item} />)
                        }
                    </Flex>
                </Flex>
            }
        </>
    );
}

export default ItemListContainer;