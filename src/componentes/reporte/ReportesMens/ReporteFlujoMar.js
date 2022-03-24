import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReporteCobrar from './reporteMarzo/ReporteCobrar'
import ReportePagar from './reporteMarzo/ReportePagar'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
      <table className="table">
            <thead>
              <tr>
                <th> Fecha </th>
                <th> Monto </th>
                <th> Descripcion </th>
                <th> Categoria </th>
              </tr>
            </thead>
            <tbody>
              {data.map((flujo) => (
                <tr key={flujo.pk}>
                  <td> {flujo.pk}</td>
                  <td> {flujo.fecha}</td>
                  <td> ${flujo.cantidad}</td>
                  <td> {flujo.descripcion}</td>
                  <td> {flujo.id_categoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
      <hr/> <hr/> <hr/>
      </header>
    </div>
  );
}

export default App;
