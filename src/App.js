import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase';

import Home from './components/Home/index';
import Header from './components/Header';
import Login from './components/Login';
import Registro from './components/Register';
import Dashboard from './components/Dashboard';
class App extends Component {
	state = {
		firebaseInitialized: false
	};

	componentDidMount() {
		firebase.isInitialized().then((resultado) => {
			// Devolve o usuario
			this.setState({ firebaseInitialized: resultado });
		});
	}

	render() {
		return this.state.firebaseInitialized !== false ? (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/register" component={Registro} />
				</Switch>
			</BrowserRouter>
		) : (
			<div id="loading">
				<h1>Carregando...</h1>
			</div>
		);
	}
}

export default App;
