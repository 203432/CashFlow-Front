import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import IndiaStyle from '../recursos.module.css'

function App() {
  const token = 'c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8';
  var mes = "";
  const create_Indicador_cobrar = () => {
    var postData = {
      indicador: "Cobrar",
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
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          console.log(response.data);
          mes = response.data.only_month;
          console.log(response.data);
          console.log(mes);
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
      indicador: "Pagar",
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
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          mes = response.data.only_month;
          console.log(response.data);
          console.log(mes);
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
      indicador: "Banco",
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
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          console.log(response.data);
          mes = response.data.only_month;
          console.log(response.data);
          console.log(mes);
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
      <div className="containerI">

        <header className="App-header">
          <h1> Cuentas por cobrar</h1>
          <div className={IndiaStyle.inputContainer}>
            <input id="week_cobrar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="week_cobrar" className={IndiaStyle.placeholder}>No.Semana</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_cobra" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_cobra" className={IndiaStyle.placeholder}>Razon social</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_cobra" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_cobra" className={IndiaStyle.placeholder}>Monto</label>
          </div>
          <button onClick={create_Indicador_cobrar} className={IndiaStyle.button1}>Guardar </button>
          <br /><br /><br />


          <h1> Cuentas por pagar</h1>
          <div className={IndiaStyle.inputContainer}>
            <input id="week_pagar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="week_pagar" className={IndiaStyle.placeholder}>No.Semana</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_pagar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_pagar" className={IndiaStyle.placeholder}>Razon social</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_pagar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_pagar" className={IndiaStyle.placeholder}>Monto</label>
          </div>
          {/* <label>No. Semana</label>
          <input type="text" id="week_pagar" />
          <label>Razon Social</label>
          <input type="text" id="razon_pagar" />
          <label>Monto</label>
          <input type="text" id="monto_pagar" />*/}
          <button onClick={create_Indicador_pagar}className={IndiaStyle.button1}>Guardar </button> 
          <br /><br /><br />


          <h1> Bancos</h1>
          <div className={IndiaStyle.inputContainer}>
            <input id="week_banco" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="week_banco" className={IndiaStyle.placeholder}>No.Semana</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_banco" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_banco" className={IndiaStyle.placeholder}>Descripcion</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_banco" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_banco"className={IndiaStyle.placeholder}>Monto</label>
          </div>
          {/* <label>No. Semana</label>
          <input type="text" id="week_banco" />
          <label>Descripcion</label>
          <input type="text" id="razon_banco" />
          <label>Monto</label>
          <input type="text" id="monto_banco" /> */}
          <button onClick={create_Indicador_Banco}className={IndiaStyle.button1}>Guardar </button>

        </header>
      </div>
    </div>
  );
}

export default App;
