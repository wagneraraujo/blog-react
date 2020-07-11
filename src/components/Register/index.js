import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';

class Registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			email: '',
			password: ''
		};

		this.register = this.register.bind(this);
		this.onRegister = this.onRegister.bind(this);
	}

	register(e) {
		e.preventDefault();
		this.onRegister();
	}

	onRegister = async () => {
		try {
			const { nome, email, password } = this.state;
			await firebase.register(nome, email, password);
			this.props.history.replace('/dashboard');
		} catch (error) {
			alert(error.message);
		}
	};

	render() {
		return (
			<div>
				<h1>Registro</h1>

				<form onSubmit={this.register}>
					<div>
						<label>Nome</label>

						<input
							type="text"
							value={this.state.nome}
							autofocus
							autoComplete="off"
							onChange={(e) => this.setState({ nome: e.target.value })}
						/>
					</div>

					<div>
						<label>Email</label>

						<input
							type="email"
							value={this.state.email}
							autoComplete="off"
							onChange={(e) => this.setState({ email: e.target.value })}
						/>
					</div>

					<div>
						<label>Senha</label>

						<input
							type="password"
							value={this.state.password}
							autoComplete="off"
							onChange={(e) => this.setState({ password: e.target.value })}
						/>
					</div>

					<div>
						<button type="submit">Cadastrar</button>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Registro);
