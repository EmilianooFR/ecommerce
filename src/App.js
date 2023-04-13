import './App.css';
import Navbar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;
