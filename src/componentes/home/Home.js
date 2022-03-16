import {useNavigate} from 'react-router-dom'

function App() {
const navigate = useNavigate();

  const redirectCategorias = () =>{
    navigate("/categoria")
  }

  const redirectFlujo = () =>{
    navigate("/flujo")
  }

  const redirectIndicadores = () =>{
    navigate("/indicadores")
  }
  return (
    <div className="App">
      <header className="App-header">
<button onClick={redirectCategorias}>Categorias</button>
<button onClick={redirectFlujo}>Flujo de efectivo</button>
<button onClick={redirectIndicadores}>Indicadores de dinero</button>
      </header>
    </div>
  );
}

export default App;
