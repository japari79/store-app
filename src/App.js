import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer title="Realizado por Jofran Aparicio - Comisión: 34855"/>} />
            <Route path='/category/:categoryid' element={<ItemListContainer title="Realizado por Jofran Aparicio - Comisión: 34855"/>} />
            <Route path='/detalle/:item' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2>La Página solicitada no existe</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
