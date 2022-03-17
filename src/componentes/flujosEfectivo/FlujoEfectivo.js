import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import FlujoStyle from '../recursos.module.css'

class App extends Component {
  state = {
    data: [],
  };

  get_Flujo = () => {
    axios
      .get("http://localhost:8000/api/v1/flujo/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
        },
      })
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response.data);
      });
  };

  get_Category = () => {
    axios
      .get("http://localhost:8000/api/v1/categoria/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
        },
      })
      .then((response) => {
        this.setState({ data: response.data });
      });
  };

  componentDidMount() {
    this.get_Category();
    this.get_Flujo();
  }

  render() {
    const consume_create_category = () => {
      let entrada = document.getElementById("entrada").checked;
      let salida = document.getElementById("salida").checked;
      let flujo = "";
      if ((entrada === false) & (salida === false)) {
        alert("Elija una opcion");
      } else {
        if (entrada === true) {
          flujo = "Entrada";
        } else {
          flujo = "Salida";
        }
      }

      var postData = {
        descripcion: document.getElementById("descripcion").value,
        tipo_flujo: flujo,
        categoria: document.getElementById("categoria").value,
      };
      if (postData.nombre_categoria === "" || postData.clasificacion === "") {
        alert("Todos los campos son requeridos");
      } else {
        axios
          .post("http://localhost:8000/api/v1/flujo/", postData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
            },
          })
          .then((response) => {
            console.log(response.data);
            alert("Se ha agregado exitosamente el nuevo flujo");
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
          <select id="categoria">
              <option defaultValue="0">Seleccione una categoria </option>
            {this.state.data.map((el) => (
              <option key={el.pk} value={el.pk}>
                {el.nombre_categoria}
              </option>
            ))}
          </select>
          <input type="radio" name="tipo" id="entrada" />
          <label htmlFor="entrada">Entrada</label>
          <br />
          <input type="radio" name="tipo" id="salida" />
          <label htmlFor="salida">Salida</label>
          <br />
          {/* <input id="descripcion" placeholder="Descripcion" /> */}
          <div className={FlujoStyle.inputContainer}>
            <input id="descripcion" className={FlujoStyle.input} type="text" placeholder=" " />
            <div className={FlujoStyle.cut}></div>
            <label for="descripcion" className={FlujoStyle.placeholder}>Descripcion</label>
          </div>
          <br />
          <button onClick={consume_create_category} className={FlujoStyle.button1}>Guardar/Editar</button>

          <table className="table">
            <thead>
              <tr>
                <th> PK </th>
                <th> Fecha </th>
                <th> Descripcion </th>
                <th> Categoria </th>
                <th> Herramientas </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((flujo) => {
                return (
                  <tr>
                    <td> {flujo.pk}</td>
                    <td> {flujo.fecha}</td>
                    <td> {flujo.descripcion}</td>
                    <td> {flujo.categoria}</td>
                    <td>
                      <button className=" btn btn-primary">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className=" btn btn-danger">
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
