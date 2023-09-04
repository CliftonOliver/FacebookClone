import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0KNeTfOaNrsezt5UHiBzjoIMUyhNAXQ",
  authDomain: "facebook-clone-99d12.firebaseapp.com",
  projectId: "facebook-clone-99d12",
  storageBucket: "facebook-clone-99d12.appspot.com",
  messagingSenderId: "347680593275",
  appId: "1:347680593275:web:2785cb1aa2f711a05119de",
  measurementId: "G-PRRHH6PW05"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;