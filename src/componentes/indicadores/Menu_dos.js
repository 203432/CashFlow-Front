import { useParams, useNavigate } from "react-router-dom";
import CategoriaStyle from "../Recursos/Home.module.css";

function App() {
  const navigate = useNavigate();

  const redirectRegistro = () => {
    navigate("/registro");
  };
  const redirectReporte = () => {
    navigate("/reporte");
  };
  return (
    <div className="App">
      <header className="App-header">
        <button className={CategoriaStyle.auxbutton} onClick={redirectRegistro}>Registro de informacion</button>
        <button className={CategoriaStyle.auxbutton} onClick={redirectReporte}>Reportes</button>
      </header>
    </div>
  );
}

export default App;
