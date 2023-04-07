import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOcnzjUXMOr0SIADZIaRuAa7PvEumTjJI",
  authDomain: "talhaportfolio.firebaseapp.com",
  projectId: "talhaportfolio",
  storageBucket: "talhaportfolio.appspot.com",
  messagingSenderId: "343015534467",
  appId: "1:343015534467:web:f7931c56b42a2370d350b6",
  measurementId: "G-ZTE4C95VHW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;