import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
		this.entrar = this.entrar.bind(this);
		this.login = this.login.bind(this);
	}

	entrar(e) {
		e.preventDefault();
	}

	login = async () => {
		const { email, password } = this.state;

		try {
			await firebase.login(email, password).catch((error) => {
				if (error.code === 'auth/user-not-found') {
					alert('usuario não encontrado');
				} else {
					alert('error:' + error.code);
					return null;
				}
			});
		} catch (error) {
			alert(error.message);
		}
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.entrar} id="login">
					<div>
						<label htmlFor="">Email</label>
						<input
							id=""
							type="text"
							name=""
							autoComplete="off"
							autoFocus
							value={this.state.email}
							onChange={(e) => this.setState({ email: e.target.value })}
							placeholder="meuemail@email.com"
						/>
					</div>
					<div>
						<label htmlFor="">Senha</label>
						<input
							id=""
							type="password"
							name=""
							autoComplete="off"
							value={this.state.password}
							onChange={(e) => this.setState({ password: e.target.value })}
							placeholder="******"
						/>
					</div>

					<div>
						<button type="submit">Entrar</button>
						<Link to="/register">Criar uma conta</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Login);
