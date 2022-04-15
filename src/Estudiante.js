import React, { Component } from "react";
import "./Estudiante.css";

export default class Estudiante extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cursos: ["PDE", "10 hs semanales"],
    };
    this.randomCurso = this.randomCurso.bind(this);
    this.cursoRandom = ["Un curso cualquiera", "AngularLIA", "SpringLIA"];
    this.horaRandom = ["20 hs semanales", "55 hs semanales", "35 hs semanales"];
  }

  randomCurso() {
    let cursoArray = [
      this.cursoRandom[(Math.random() * this.cursoRandom.length) | 0],
      this.horaRandom[(Math.random() * this.horaRandom.length) | 0],
    ];
    return cursoArray;
  }

  handleClick() {
    this.setState((state) => ({
      cursos: [...state.cursos, ...this.randomCurso()],
    }));
  }

  render() {
    return (
      <div className="estilo">
        <p>
          Estudiante:
          {this.props.estudiante.nombre + " " + this.props.estudiante.apellido}
        </p>

        <p> Cursos: </p>

        <table className="estilo-tabla">
          <thead>
            <tr>
              <th>Cursos</th>
              <th>Cant. hs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {this.state.cursos.map((curso) => (
                <td>{curso}</td>
              ))}
            </tr>
          </tbody>
        </table>

        <p>
          <button onClick={this.handleClick}> Inscribirme </button>
        </p>
      </div>
    );
  }
}
