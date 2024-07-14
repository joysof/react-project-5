// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8CPr0gTnPG7Ay_Qb6QRiZ1ohZNg4ppec",
  authDomain: "reactproject5-a71cd.firebaseapp.com",
  projectId: "reactproject5-a71cd",
  storageBucket: "reactproject5-a71cd.appspot.com",
  messagingSenderId: "1022488114693",
  appId: "1:1022488114693:web:75f3cee117357dea870e6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);