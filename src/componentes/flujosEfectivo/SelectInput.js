import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import SStyle from '../recursos.module.css'
import "./Flujo.css"

function App() {
const token = 'c0b7ad49032cc9a0ee03c84115f09ed6dd6aceb8';
const [data, setData] =useState([]);

 const peticionGet_Categoria = () => {
    axios
      .get("http://localhost:8000/api/v1/categoria/entrada/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token "+ token,
        },
      })
      .then((response) => {
        setData(response.data)
      });
  };

  useEffect(()=>{
     peticionGet_Categoria();
    },[])
        
    return (
      <div className="App">
        <div className="margin">
          <div className={SStyle.select}>
            <select id="categoria">
              <option defaultValue="0">Seleccione una categoria </option>
              {data.map((el) => (
                <option key={el.pk} value={el.pk}>
                  {el.subCategoria}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    );
}

export default App;