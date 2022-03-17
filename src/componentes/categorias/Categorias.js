import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import CatStyle from '../recursos.module.css'

class App extends Component {
  state = {
    data: [],
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
              Authorization: "Token 03847c98baeba02569eed58b89ab7802fea497c7",
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

          {/* <input id="clasificacion" placeholder="Clasificacion" /> */}
          <div className={CatStyle.inputContainer}>
            <input id="clasificacion" className={CatStyle.input} type="text" placeholder=" " />
            <div className={CatStyle.cut}></div>
            <label for="clasificacion" className={CatStyle.placeholder}>Clasiciacion</label>
          </div>
          <br />

          {/* <input id="nombre" placeholder="nombre categoria" /> */}
          <div className={CatStyle.inputContainer}>
            <input id="nombre" className={CatStyle.input} type="text" placeholder=" " autocomplete="off" />
            <div className={CatStyle.cut}></div>
            <label for="nombre" className={CatStyle.placeholder}>Nombre</label>
          </div>
          <br />
          <button onClick={consume_create_category} className={CatStyle.button1}>Guardar/Editar</button>

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
                    <td> {categoria.pk}</td>
                    <td> {categoria.nombre_categoria}</td>
                    <td> {categoria.clasificacion}</td>
                    <td>
                      <button className=" btn btn-primary"><FontAwesomeIcon icon={faEdit} /></button>
                      <button className=" btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
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
