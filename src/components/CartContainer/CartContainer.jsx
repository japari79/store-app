import { cartContext } from "../../storage/cartContext";
import { useContext } from "react";
import { PostCreateOrder } from '../../services/firebaseDB'; 
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import CheckoutForm from "../Form/CheckoutForm";
import "../CartContainer/CartContainer.css";

function CartContainer() {
    const {cart, removeItem, getTotalPrice, getTotalItemsCart, clearCart} = useContext(cartContext);
    
    const navTo = useNavigate();

    function handleCheckout(e, userData) {
        e.preventDefault();
        
        const items = cart.map(item => ( {id: item.id, title: item.title, quantity: item.quantity, price: item.price} ));
        
        const order = {
            buyer: userData,
            itemsCart: items,
            totalPrice: getTotalPrice(),
            dateBuy: new Date()
        };

        async function sendOrder() {
            try{
                let id = await PostCreateOrder(order);
                navTo(`/finally/${id}`);
            }
            catch(error){
                alert("Disculpa, ocurrio un error al registrar tu compra." , error)
            }
            finally{
                clearCart()
            }
        }

        sendOrder();
    }

    if(cart.length === 0) {
        return (
            <div className="msg-alert">No existen productos en el carrito de compras!</div>
        );
    }

    return (
        <div>
            <h1 className="cart-title">Carrito de compras (Resumen)</h1>
            <table className="cart-table">
                <thead className="cart-head">
                    <tr className="cart-row">
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio (COP)</th>
                        <th>Cantidad</th>
                        <th>Eliminar del carrito</th>
                        <th>Valor total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item => (
                            <tr key={item.id} className="cart-row-detail">
                                <td>
                                    <img src={item.img} alt={item.title} height={40} />
                                </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Button onClick={()=> removeItem(item)}>Eliminar</Button>
                                </td>
                                <td>COP$ {getTotalItemsCart(item.quantity, item.price)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p>El valor a pagar es: ${getTotalPrice()}</p>
            <Button onClick={clearCart}>Vaciar carrito</Button>
            <CheckoutForm onCheckout={handleCheckout} />
        </div>
    )
}

export default CartContainer