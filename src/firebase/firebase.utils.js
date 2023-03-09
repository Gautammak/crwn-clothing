//error

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBuaI5CIN28eyA5te8juAiYnkOOeJyLxd0",
  authDomain: "crwn-db-7e126.firebaseapp.com",
  projectId: "crwn-db-7e126",
  storageBucket: "crwn-db-7e126.appspot.com",
  messagingSenderId: "700055223126",
  appId: "1:700055223126:web:0b9070b709a50e87a8f4f7",
  measurementId: "G-RNBXR8HDPJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
