import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { NomeUser, UserLogout } from "./styled";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: localStorage.nome,
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    if (!firebase.getCurrent()) {
      this.props.history.replace("/login");
      return null;
    }

    firebase.getUserName((info) => {
      this.setState({ nome: localStorage.nome });
    });
  }

  logout = async () => {
    await firebase.logout().catch((error) => {
      console.log(error);
    });

    localStorage.removeItem("nome");
    this.props.history.push("/");
  };
  render() {
    return (
      <section>
        <NomeUser>Olá {this.state.nome}</NomeUser>
        <Link to="/dashboard/new">Novo Post</Link>

        <UserLogout>
          Você está logado como: {firebase.getUserName()}
          <button onClick={() => this.logout()}>Sair</button>
        </UserLogout>
      </section>
    );
  }
}
export default withRouter(Dashboard);
