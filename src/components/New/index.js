import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      imagem: "",
      descricao: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }
  cadastrar() {}
  render() {
    return (
      <div>
        <header>
          <Link to="/dashboard">Voltar</Link>
        </header>
        <h3>Novo post</h3>

        <form onSubmit={this.cadastrar}>
          <div>
            <label htmlFor="">titulo</label>
            <input
              id=""
              type="text"
              name=""
              placeholder="Titulo aqui"
              value={this.state.titulo}
              onChange={(e) => this.setState({ titulo: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Url da imagem</label>
            <input
              id=""
              type="text"
              name=""
              placeholder="cole a url"
              value={this.state.imagem}
              onChange={(e) => this.setState({ imagem: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="">Descrição</label>
            <textarea
              id=""
              type="text"
              name=""
              placeholder="Escreva uma descrição"
              value={this.state.descricao}
              onChange={(e) => this.setState({ descricao: e.target.value })}
            />
          </div>

          <button type="submit">Criar post</button>
        </form>
      </div>
    );
  }
}

export default withRouter(New);
