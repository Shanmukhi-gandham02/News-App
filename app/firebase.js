// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj4mnQaltkt_VvUxOwPmxVJJap9M_6qdk",
  authDomain: "news-app-ce01d.firebaseapp.com",
  projectId: "news-app-ce01d",
  storageBucket: "news-app-ce01d.appspot.com",
  messagingSenderId: "947779148372",
  appId: "1:947779148372:web:f672923aba2e2ee110ebc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



