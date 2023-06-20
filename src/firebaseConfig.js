// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjKwW1yme5hiE71OzKto2f8CdtvaFN4UM",
  authDomain: "petzyiee.firebaseapp.com",
  projectId: "petzyiee",
  storageBucket: "petzyiee.appspot.com",
  messagingSenderId: "1038803083910",
  appId: "1:1038803083910:web:1996b11fc03c1403836707",
  measurementId: "G-L2V770FXGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);