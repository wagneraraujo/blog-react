import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

//Configurações do seu projeto
const firebaseConfig = {
    apiKey: "AIzaSyCtOK6yPQ8qXqzFmLXNMF6DdhQFT5truoA",
    authDomain: "blog2-5e894.firebaseapp.com",
    databaseURL: "https://blog2-5e894.firebaseio.com",
    projectId: "blog2-5e894",
    storageBucket: "blog2-5e894.appspot.com",
    messagingSenderId: "1068624455443",
    appId: "1:1068624455443:web:8c3ee67d2723f56af1dce6"
};

class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);

		//Referenciando a database para acessar em outros locais
		this.app = app.database();

		this.storage = app.storage();
	}

	login(email, password) {
		return app.auth().signInWithEmailAndPassword(email, password);
	}

	logout() {
		return app.auth().signOut();
	}

	async register(nome, email, password) {
		await app.auth().createUserWithEmailAndPassword(email, password);

		const uid = app.auth().currentUser.uid;

		return app.database().ref('usuarios').child(uid).set({
			nome: nome
		});
	}

	isInitialized() {
		return new Promise((resolve) => {
			app.auth().onAuthStateChanged(resolve);
		});
	}

	getCurrent() {
		return app.auth().currentUser && app.auth().currentUser.email;
	}

	getCurrentUid() {
		return app.auth().currentUser && app.auth().currentUser.uid;
	}

	async getUserName(callback) {
		if (!app.auth().currentUser) {
			return null;
		}

		const uid = app.auth().currentUser.uid;
		await app.database().ref('usuarios').child(uid).once('value').then(callback);
	}
}

export default new Firebase();
