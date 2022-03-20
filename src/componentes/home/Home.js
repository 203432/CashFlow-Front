import { useNavigate } from 'react-router-dom'
import HomeStyle from '../recursos.module.css'
import "./Home.css"

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
      <div className='form'>
        <h1>CashFlow</h1> <p>¡Bienvenido! Elija una opción:</p>
        <button onClick={redirectCategorias} className={HomeStyle.button1}>Categorias</button>
        <button onClick={redirectFlujo} className={HomeStyle.button1} >Flujo de efectivo</button>
        <button onClick={redirectIndicadores} className={HomeStyle.button1}>Indicadores de dinero</button>
      </div>
      </header>
      
    </div>
  );
}

export default App;
