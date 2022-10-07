import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAExiLuej91ZCAP-Qwbx7N4J9Ik3NH3nK0",
  authDomain: "tik-tok-clone-1155.firebaseapp.com",
  projectId: "tik-tok-clone-1155",
  storageBucket: "tik-tok-clone-1155.appspot.com",
  messagingSenderId: "670483072553",
  appId: "1:670483072553:web:fa60bc4361d34fe895fe38",
  measurementId: "G-ZYR68ZRHBT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
