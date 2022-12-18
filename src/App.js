import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer title="Realizado por Jofran Aparicio - Comisión: 34855"/>
      </header>
    </div>
  );
}

export default App;
