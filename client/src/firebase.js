// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tripura-real-estate.firebaseapp.com",
  projectId: "tripura-real-estate",
  storageBucket: "tripura-real-estate.firebasestorage.app",
  messagingSenderId: "79587743011",
  appId: "1:79587743011:web:bec1aaaca94437bb94e896"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);