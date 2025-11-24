// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb8i9nHZa8itLq0SVY87qSXawySyyVIfQ",
  authDomain: "solanaflipoff.firebaseapp.com",
  databaseURL: "https://solanaflipoff-default-rtdb.firebaseio.com",
  projectId: "solanaflipoff",
  storageBucket: "solanaflipoff.firebasestorage.app",
  messagingSenderId: "214281047542",
  appId: "1:214281047542:web:9f24f6d9fb79e032d60bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);