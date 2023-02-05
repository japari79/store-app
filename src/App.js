import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import ResultForm from './components/pages/ResultForm';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CartProvider } from './storage/cartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
              <Route path='/' element={<ItemListContainer title="Realizado por Jofran Aparicio - Comisión: 34855"/>} />
              <Route path='/category/:categoryid' element={<ItemListContainer title="Realizado por Jofran Aparicio - Comisión: 34855"/>} />
              <Route path='/detalle/:item' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/finally/:id' element={<ResultForm />} />
              <Route path='*' element={<h2>La Página solicitada no existe</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
