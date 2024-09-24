// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIanthQVYQmC848YGvJ-dVatUz1ahJJzo",
  authDomain: "mern-book-inventory-2897c.firebaseapp.com",
  projectId: "mern-book-inventory-2897c",
  storageBucket: "mern-book-inventory-2897c.appspot.com",
  messagingSenderId: "141264831291",
  appId: "1:141264831291:web:7e6064087d7fb9e0c7ed1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;