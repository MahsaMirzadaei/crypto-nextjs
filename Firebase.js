// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZKHZe3dTAnfN9RG8FAwU6JjlPNepy3Lw",
  authDomain: "crypto-fb427.firebaseapp.com",
  projectId: "crypto-fb427",
  storageBucket: "crypto-fb427.appspot.com",
  messagingSenderId: "510584029953",
  appId: "1:510584029953:web:ddfbc63f7fda147fcf5100",
  measurementId: "G-15BPD0EF43",
  databaseURL: "https://crypto-fb427-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
