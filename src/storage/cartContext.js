import { createContext, useState } from "react";

// Creación del Context
export const cartContext = createContext({ cart: [] });

// Se inicializa el Provider
function CartProvider(props) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        /*let newCart = [...cart]
        newCart.push(item);
        setCart(newCart)*/

        let itemExistInCart = cart.findIndex(cartItem => cartItem.id === item.id)
        let newCart = cart.map((item) => item);

        /*if(itemExistInCart !== -1) {
            //newCart[itemExistInCart]
        }else{
            newCart.push(item);
            setCart(newCart);
        } */

        setCart([...cart, item]);
    }

    function removeItem(item) {
        let itemIndexInCart = cart.findIndex(cartItem => cartItem.id === item.id)
        let newCart = cart.map((item) => item);

        newCart.splice(itemIndexInCart, 1)

        setCart(newCart);
    }

    function clearCart() {
        setCart([]);
    }

    function getTotalItemsCart(quantity, price) {
        let totalItem = quantity * price;
        return totalItem;
    }

    function getTotalPrice() {
        let totalPrice = cart.map((item) => item.price * item.quantity);
        
        return totalPrice.reduce((a,b) => a + b);
    }


    return(
        <cartContext.Provider value={{cart, addToCart, removeItem, clearCart, getTotalItemsCart, getTotalPrice}}>
            {props.children}
        </cartContext.Provider>
    );
}

export { CartProvider }