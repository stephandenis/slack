import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3Fg5eJ-j5SzvUQaF6jaufvZEOZSyGv3Q",
  authDomain: "slack-deni.firebaseapp.com",
  projectId: "slack-deni",
  storageBucket: "slack-deni.appspot.com",
  messagingSenderId: "180545656211",
  appId: "1:180545656211:web:769eee403e66efbd408466",
};

//connection to firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
