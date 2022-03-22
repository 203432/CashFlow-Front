// import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  var suma = 0;
  var totalCobrar = 0;
  const token = "c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8";
  //States para la tabla de cuentas por cobrar
  const [data, setData] = useState([]);
  const [totalCobSem1, setTotalCobSem1] = useState(0);
  const [totalCobSem2, setTotalCobSem2] = useState(0);
  const [totalCobSem3, setTotalCobSem3] = useState(0);
  const [totalCobSem4, setTotalCobSem4] = useState(0);
  

  const peticionGet = () => {
    axios
      .get("http://localhost:8000/api/v1/indicadores/pagar/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        var size = response.data.length;
        setData(response.data);
        for (var i = 0; i < size; i++) {
          suma = suma + response.data[i].semana1;
        }
        setTotalCobSem1(suma);
        suma = 0
        for (var i = 0; i < size; i++) {
          suma = suma + response.data[i].semana2;
        }
        setTotalCobSem2(suma);
        suma = 0
        for (var i = 0; i < size; i++) {
          suma = suma + response.data[i].semana3;
        }
        setTotalCobSem3(suma);
        suma = 0
        for (var i = 0; i < size; i++) {
          suma = suma + response.data[i].semana4;
        }
        setTotalCobSem4(suma);
      });
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
  
        <table className="table">
          <thead>
            <tr>
              <th>
                {" "}
                <b>Cuenta por pagar</b>{" "}
              </th>
              <th> semana 1 </th>
              <th> semana 2</th>
              <th> semana 3 </th>
              <th> semana 4 </th>
              <th> final </th>
            </tr>
          </thead>
          <tbody>
            {data.map((indicadores) => (
              <tr key={indicadores.pk}>
                <td>{indicadores.Razon}</td>
                <td>${indicadores.semana1}</td>
                <td>${indicadores.semana2}</td>
                <td>${indicadores.semana3}</td>
                <td>${indicadores.semana4} </td>
                <td>
                  $
                  {indicadores.semana1 +
                    indicadores.semana2 +
                    indicadores.semana3 +
                    indicadores.semana4}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td> Total de cuentas por pagar</td>
              <td> ${totalCobSem1}</td>
              <td> ${totalCobSem2}</td>
              <td> ${totalCobSem3}</td>
              <td> ${totalCobSem4}</td>
              <td> ${totalCobSem1+totalCobSem2+totalCobSem2+totalCobSem4}</td>
            </tr>
          </tfoot>
        </table>
      </header>
    </div>
  );
}

export default App;