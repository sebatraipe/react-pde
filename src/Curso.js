import React, { Component } from "react";
import "./Curso.css";

export default class Curso extends Component {
  constructor(props) {
    super(props);
    this.listarCursos = this.listarCursos.bind(this);
    this.cursosPorEstudiantes = this.cursosPorEstudiantes.bind(this);
    this.limpiar = this.limpiar.bind(this);
    this.state = {
      cursos: [],
    };
  }

  listarCursos() {
    fetch("http://localhost:1234/cursos")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
          resultado: json.result,
        });
      });
  }

  cursosPorEstudiantes() {
    fetch("http://localhost:1234/estudiantes/?id=1")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          cursos: json.estudiantes[0].cursos,
          resultado: json.result,
        });
      });
  }

  limpiar() {
    this.setState({
      cursos: [],
    });
  }

  render() {
    return (
      <div className="estilo">
        <div className="estilo-2">
          <button className="button" onClick={this.listarCursos}>
            Listar Cursos
          </button>
          <button className="button" onClick={this.cursosPorEstudiantes}>
            Cursos por estudiantes
          </button>
          <button className="button" onClick={this.limpiar}>
            Limpiar
          </button>
        </div>

        <hr />
        <table className="estilo-tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cursos.map((c, index) => (
              <tr>
                <td key={index + 1}>{c.nombre}</td>
                <td key={index + 1}>{c.horas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
