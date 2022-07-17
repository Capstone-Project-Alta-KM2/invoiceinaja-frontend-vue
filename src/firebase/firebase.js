// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwaEjia_xgOSRyhcg6oW9Wib5DRX5eOlw",
  authDomain: "invoiceinaja-4b9e0.firebaseapp.com",
  projectId: "invoiceinaja-4b9e0",
  storageBucket: "invoiceinaja-4b9e0.appspot.com",
  messagingSenderId: "486884852152",
  appId: "1:486884852152:web:38ef9ae130935f754c4f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db