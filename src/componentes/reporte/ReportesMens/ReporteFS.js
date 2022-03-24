import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReporteFS = () =>{
    const mes = localStorage.getItem("mes")
    var suma = 0;
    var totalCobrar = 0;
    const token = localStorage.getItem("token");
    //States para la tabla de cuentas por cobrar
    const [data, setData] = useState([]);
    const [totalCantidad, setTotalCantidad] = useState(0);

    
  
    const peticionGet = () => {
     
      axios
        .get("http://localhost:8000/api/v1/flujosalida/"+mes, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          var size = response.data.length;
          setData(response.data);
          for (var i = 0; i < size; i++) {
            suma = suma + response.data[i].cantidad;
          }
          setTotalCantidad(suma);
        });
    };
  
    useEffect(() => {
      peticionGet();
    }, []);
  
    return( 
        <div className="App">
        <header className="App-header">
        <table className="table">
            <thead>
              <tr>
                <th> Fecha </th>
                <th> Descripcion </th>
                <th> Monto </th>
              </tr>
            </thead>
            <tbody>
              {data.map((flujo) => (
                <tr key={flujo.pk}>
                  <td> {flujo.fecha}</td>
                  <td> {flujo.descripcion}</td>
                  <td> ${flujo.cantidad}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td> Total de salidas del mes</td>
                <td> - </td>
                <td> ${totalCantidad}</td>
              </tr>
            </tfoot>
          </table>
        </header>
      </div>
    )
}

export default ReporteFS;