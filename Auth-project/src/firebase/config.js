// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVQQ2_FTcYdtrWMO2tJC9EZV3-aIvVzYk",
  authDomain: "auth-project-69bfc.firebaseapp.com",
  projectId: "auth-project-69bfc",
  storageBucket: "auth-project-69bfc.appspot.com",
  messagingSenderId: "225721993686",
  appId: "1:225721993686:web:a4402da7dc1674bcd9bc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)