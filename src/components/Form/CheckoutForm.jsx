import InputForm from './InputForm';
import { useState } from 'react';
import Button from "../Button/Button";
import "../Form/CheckoutForm.css";

function CheckoutForm(props) {
    const [userData, setUserData] = useState({
        Nombre: "",
        Telefono: "",
        Mail: "",
    });

    let fieldsForm = Object.keys(userData);

    function onInputChange(e) {
        let value = e.target.value;
        let inputName = e.target.name;
    
        let newState = { ...userData };

        newState[inputName] = value;
        setUserData(newState);
    }

    function formIsInvalid() {
        return !(
            userData.Nombre !== "" &&
            userData.Telefono !== "" &&
            userData.Mail !== ""
        );
    }

    return (
        <form onSubmit={props.handleCheckout}>
            <h1 className="form-title">Por favor, diligencia los siguientes datos para poder finalizar tu compra</h1>
                {fieldsForm.map((field) => (
                    <InputForm
                        value={userData[field]}
                        name={field}
                        onChange={onInputChange}
                        label={field}
                        userData={userData}
                    />
                ))}
                <Button
                    onClick={(e) => props.onCheckout(e, userData)}
                    disabled={formIsInvalid()}
                    type="submit"
                >
                Finalizar compra
                </Button>
        </form>
    );
}

export default CheckoutForm;