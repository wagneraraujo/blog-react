import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCHePpInX3SRtGdZK90fYkPab9xqBPPxZA",
  authDomain: "blog-react-dca7c.firebaseapp.com",
  databaseURL: "https://blog-react-dca7c.firebaseio.com",
  projectId: "blog-react-dca7c",
  storageBucket: "blog-react-dca7c.appspot.com",
  messagingSenderId: "746850718801",
  appId: "1:746850718801:web:3f0ce07da7a2de64d6d470",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  async register(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);

    const uid = app.auth().currentUser.uid;
    return app.database().ref("usuarios").child(uid).set({
      nome: nome,
    });
  }

  isInitialized() {
    return new Promise((resolve) => {
      app.auth().onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
