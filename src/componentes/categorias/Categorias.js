import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import CatStyle from "../recursos.module.css";
import SStyle from '../recursos.module.css';
import "./Categorias.css";

function App()  {
const [data, setData] =useState([]);

const peticionGet =  () =>{
   axios
  .get("http://localhost:8000/api/v1/categoria/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8",
    },
  })
  .then((response) => {
setData(response.data)
  });
} 

useEffect(()=>{
peticionGet();
},[])

const peticionPost = () => {
  var tipoflu=""
  var cat = document.getElementById("categoria").value
  if(cat === "Ingreso"){
tipoflu = "Entrada"
  }
  else{
    tipoflu = "Salida"
  }
  var postData = {
    categoria: cat,
    tipo: tipoflu,
    subCategoria: document.getElementById("subCategoria").value
  };

  if (postData.categoria === "" || postData.subCategoria === "") {
    alert("Todos los campos son requeridos");
  } else {
    axios
      .post("http://localhost:8000/api/v1/categoria/", postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Se ha agregado exitosamente la categoria");
        window.location.reload()
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
          <div className="container2">
            <div className="cDer">
              <div className={CatStyle.inputContainer}>
              <div className={SStyle.select}>
              <select id="categoria">
                  <option defaultValue="0">Seleccione una categoria </option>
                    <option value="GAO">GAO</option>
                    <option value="Costo-Venta">Costo-Venta</option>
                    <option value="Ingreso">Ingreso</option>
                </select>
              </div>
              </div>
              <br />

              <div className={CatStyle.inputContainer}>
                <input
                  id="subCategoria"
                  className={CatStyle.input}
                  type="text"
                />
                <div className={CatStyle.cut}></div>
                <label for="nombre" className={CatStyle.placeholder}>
                  Nombre
                </label>
              </div>
              <br />
              <button
                className={CatStyle.button1}
                onClick={peticionPost}
              >
                Guardar
              </button>
            </div>

            <div className="cIzq">
              <table className="table">
                <thead>
                  <tr>
                    <th> PK </th>
                    <th> Categoria</th>
                    <th> SubCategoria </th>
                    <th> Acciones </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(categoria =>(
                    <tr key={categoria.pk}>
                      <td>{categoria.pk}</td>
                      <td>{categoria.categoria}</td>
                      <td>{categoria.subCategoria}</td>
                      <td>
                          <button className=" btn btn-primary">
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                        </td>
                    </tr>
                  ))}
                        
                </tbody>
              </table>
            </div>
          </div>
        </header>
      </div>
    );
}

export default App;
