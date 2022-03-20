import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import CategoriaStyle from "../Recursos/Home.module.css"

class App extends Component {
  state = {
    data: [],
  };

  get_Category = () => {
    axios
      .get("http://localhost:8000/api/v1/categoria/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 6f5c41a6b6ad4e6adaf64769e8ecbdc97a411200",
        },
      })
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response.data);
      });
  };

  componentDidMount() {
    this.get_Category();
  }

  render() {
    const consume_create_category = () => {
      var postData = {
        nombre_categoria: document.getElementById("nombre").value,
        clasificacion: document.getElementById("clasificacion").value,
      };
      if (postData.nombre_categoria === "" || postData.clasificacion === "") {
        alert("Todos los campos son requeridos");
      } else {
        axios
          .post("http://localhost:8000/api/v1/categoria/", postData, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Token 6f5c41a6b6ad4e6adaf64769e8ecbdc97a411200",
            },
          })
          .then((response) => {
            console.log(response.data);
            alert("Se ha agregado exitosamente la nueva categoria");
            // redirectLogin();
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    };
    return (
      <div className="App">
        <header className="App-header">
          <input id="clasificacion" placeholder="Clasificacion" />
          <br />
          <input id="nombre" placeholder="nombre categoria" />
          <button className={CategoriaStyle.auxbutton} onClick={consume_create_category}>Guardar/Editar</button>

          <table className="table">
            <thead>
              <tr>
                <th> PK </th>
                <th> nombre </th>
                <th> clasificacion </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((categoria) => {
                return (
                  <tr>
                    <td> <label className="is-black">{categoria.pk}</label></td>
                    <td> <label className="is-black">{categoria.nombre_categoria}</label></td>
                    <td> <label className="is-black">{categoria.clasificacion}</label></td>
                    <td>
                      <button className={"btn btn-primary"}>
                        <FontAwesomeIcon icon={faEdit}/>
                      </button>
                      <button className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrashAlt} /></button>
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
