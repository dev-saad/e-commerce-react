import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBSY3ALw2y1wEMc5CsPHomycHjszrNyZ0c",
  authDomain: "clone-project-b7464.firebaseapp.com",
  projectId: "clone-project-b7464",
  storageBucket: "clone-project-b7464.appspot.com",
  messagingSenderId: "835822324273",
  appId: "1:835822324273:web:c7318c464fc667ccffe310",
  measurementId: "G-P4M36S43K3",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
