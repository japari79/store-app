import '../pages/ResultForm.css';
import { useParams } from 'react-router-dom';

function ResultForm() {
    let {id} = useParams();

    return(
        <div>
            <h1 msg-suscess>Muchas gracias por tu compra!</h1>
            <p>El número de referencia de tu compra es: <b>{id}</b></p>
        </div>
    );
}

export default ResultForm;