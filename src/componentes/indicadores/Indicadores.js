import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
    const create_Indicador_cobrar = () => {
        var postData = {
          indicador : "Cobrar",
          numSemana: document.getElementById("week_cobrar").value,
          Razon: document.getElementById("razon_cobra").value,
          monto: document.getElementById("monto_cobra").value,
        };
        if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
          alert("Todos los campos son requeridos");
        } else {
          axios
            .post("http://localhost:8000/api/v1/indicadores/", postData, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
              },
            })
            .then((response) => {
              console.log(response.data);
              alert("Se ha agregado exitosamente la cuenta por cobrar");
              // redirectLogin();
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        // alert("Hola login");
      };

      const create_Indicador_pagar = () => {
        var postData = {
          indicador : "Pagar",
          numSemana: document.getElementById("week_pagar").value,
          Razon: document.getElementById("razon_pagar").value,
          monto: document.getElementById("monto_pagar").value,
        };
        if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
          alert("Todos los campos son requeridos");
        } else {
          axios
            .post("http://localhost:8000/api/v1/indicadores/", postData, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
              },
            })
            .then((response) => {
              console.log(response.data);
              alert("Se ha agregado exitosamente la cuenta por pagar");
              // redirectLogin();
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        // alert("Hola login");
      };

      const create_Indicador_Banco = () => {
        var postData = {
          indicador : "Banco",
          numSemana: document.getElementById("week_banco").value,
          Razon: document.getElementById("razon_banco").value,
          monto: document.getElementById("monto_banco").value,
        };
        if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
          alert("Todos los campos son requeridos");
        } else {
          axios
            .post("http://localhost:8000/api/v1/indicadores/", postData, {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
              },
            })
            .then((response) => {
              console.log(response.data);
              alert("Se ha agregado exitosamente la cuenta pendiente al banco");
              // redirectLogin();
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        // alert("Hola login");
      };
  return (
    <div className="App">
      <header className="App-header">
          <h1> Cuentas por cobrar</h1>
          <label>No. Semana</label>
          <input  type="text" id="week_cobrar"  /> 
          <label>Razon Social</label>
          <input type="text" id="razon_cobra" /> 
          <label>Monto</label>
          <input type="text" id="monto_cobra" />
          <button onClick={create_Indicador_cobrar}>Guardar </button> 
          <br/><br/><br/>
         <h1> Cuentas por pagar</h1>
          <label>No. Semana</label>
          <input type="text" id="week_pagar" /> 
          <label>Razon Social</label>
          <input type="text" id="razon_pagar" /> 
          <label>Monto</label>
          <input type="text" id="monto_pagar" />
          <button onClick={create_Indicador_pagar}>Guardar </button> 
          <br/><br/><br/>
          <h1> Bancos</h1>
          <label>No. Semana</label>
          <input type="text" id="week_banco" /> 
          <label>Descripcion</label>
          <input type="text" id="razon_banco" /> 
          <label>Monto</label>
          <input type="text" id="monto_banco" />
          <button onClick={create_Indicador_Banco}>Guardar </button>  
      </header>
    </div>
  );
}

export default App;
