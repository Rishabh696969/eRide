import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDGv0DN2mqaYrT_JtxYfQTLRHU_szxvmx4",
    authDomain: "eride-b2e90.firebaseapp.com",
    projectId: "eride-b2e90",
    storageBucket: "eride-b2e90.appspot.com",
    messagingSenderId: "429006644578",
    appId: "1:429006644578:web:4cbaa6de43b8f9b249783b"
  };
  




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


