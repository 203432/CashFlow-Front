import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import SStyle from '../recursos.module.css'
import "./Flujo.css"

class App extends Component {
  state = {
    data: [],
  };

  get_Category = () => {
    axios
      .get("http://localhost:8000/api/v1/categoria/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8",
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
    return (
      <div className="App">
        <div className="margin">
          <div className={SStyle.select}>
            <select id="categoria">
              <option defaultValue="0">Seleccione una categoria </option>
              {this.state.data.map((el) => (
                <option key={el.pk} value={el.pk}>
                  {el.nombre_categoria}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    );
  }
}

export default App;