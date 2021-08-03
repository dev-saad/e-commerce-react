import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDDz3F_iveTKNJFyc2S5anaAduU-Nxqvug",
  authDomain: "react-e-commerce-65cf3.firebaseapp.com",
  projectId: "react-e-commerce-65cf3",
  storageBucket: "react-e-commerce-65cf3.appspot.com",
  messagingSenderId: "222593682161",
  appId: "1:222593682161:web:ecd0002ea8fd213c8db750",
  measurementId: "G-LRJLS837SR",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
