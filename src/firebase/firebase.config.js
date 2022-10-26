// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-M4pGc0rqbKrV9d8rG-sCLada10kDnsA",
  authDomain: "learn-for-tomorrow.firebaseapp.com",
  projectId: "learn-for-tomorrow",
  storageBucket: "learn-for-tomorrow.appspot.com",
  messagingSenderId: "635701157989",
  appId: "1:635701157989:web:63a66913d3f924fbd7e68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;