import React, { Component } from "react";
import "./Estudiante.css";

export default class Estudiante extends Component {
  render() {
    let estudiante = {
      numLegajo: 1234,
      universidad: "UNRN",
      carrera: "Lic. Sistemas",
    };
    return (
      <div>
        <p className="estilo">
          {" "}
          {estudiante.numLegajo +
            " " +
            estudiante.universidad +
            " " +
            " " +
            estudiante.carrera}
        </p>
      </div>
    );
  }
}
