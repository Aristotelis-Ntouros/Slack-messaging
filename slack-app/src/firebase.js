
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAwK7f4EorBBQG-nmhoHP-_dk8QVot6mpE",
    authDomain: "slack-alike.firebaseapp.com",
    databaseURL: "https://slack-alike.firebaseio.com",
    projectId: "slack-alike",
    storageBucket: "slack-alike.appspot.com",
    messagingSenderId: "511250835303",
    appId: "1:511250835303:web:3a4bae0e8ef3785e5131c2",
    measurementId: "G-HCT1QK0WB4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firestore.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;