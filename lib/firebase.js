// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFy7QZut0wj8DIjC6OBC9sQn64p0h44iw",
  authDomain: "to-do123.firebaseapp.com",
  projectId: "to-do123",
  storageBucket: "to-do123.appspot.com",
  messagingSenderId: "811373738668",
  appId: "1:811373738668:web:5d588cb540429f4e193d09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}