// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId:"to-do-2fa36",
  apiKey:"AIzaSyCxmbicbb1zEA_otztuv_5I7HEw5DyUBG0",
  authDomain: "to-do-2fa36.firebaseapp.com",
  storageBucket: "to-do-2fa36.appspot.com",
  messagingSenderId: "140243516409",
  appId:"1:140243516409:web:f701bfa266e61bb1b31b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

export {db}