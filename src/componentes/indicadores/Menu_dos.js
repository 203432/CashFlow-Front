import { useParams, useNavigate } from "react-router-dom";

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
        <button onClick={redirectRegistro}>Registro de informacion</button>
        <button onClick={redirectReporte}>Reportes</button>
      </header>
    </div>
  );
}

export default App;
