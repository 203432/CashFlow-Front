import { useNavigate } from 'react-router-dom'
import './Home.css'
import HomeStyle from "../Recursos/Home.module.css"

function App() {
  const navigate = useNavigate();

  const redirectCategorias = () => {
    navigate("/categoria")
  }

  const redirectFlujo = () => {
    navigate("/flujo")
  }

  const redirectIndicadores = () => {
    navigate("/indicadores")
  }
  return (
    <div className="App">
      <header className="App-header">
        <button className= {HomeStyle.auxbutton} onClick={redirectCategorias}>Categorias</button>
        <button className= {HomeStyle.auxbutton} onClick={redirectFlujo}>Flujo de efectivo</button>
        <button className= {HomeStyle.auxbutton} onClick={redirectIndicadores}>Indicadores de dinero</button>
      </header>
    </div>
  );
}

export default App;
