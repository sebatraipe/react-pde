import React, { Component } from "react";

export default class CrearEstudiante extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      form: {
        nombre: "",
        apellido: "",
        curso: "",
      },
      cursos: [],
      resultado: "",
    };
  }

  handleChange(e) {
    let nombre = e.target.name;
    let valor = e.target.value;

    this.setState((state) => ({
      form: {
        ...state.form,
        [nombre]: valor,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:1234/estudiantes", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.form.nombre,
        apellido: this.state.form.apellido,
        curso: this.state.form.cursos,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (json.result === "error") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          resultado: "El estudiante fue creado con exito!",
        });
      });
  }

  componentDidMount() {
    fetch("http://localhost:1234/cursos")
      .then((r) => r.json())
      .then((json) => {
        this.setState({
          cursos: json.cursos,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.form.nombre}
            ></input>
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.form.apellido}
            ></input>
          </label>

          <select name="cursos" onChange={this.handleChange}>
            {this.state.cursos.map((c) => (
              <option value={c.id}>{c.nombre + ", " + c.horas}</option>
            ))}
          </select>
          <label>
            <button onClick={this.handleSubmit} type="submit">
              Agregar
            </button>
          </label>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
